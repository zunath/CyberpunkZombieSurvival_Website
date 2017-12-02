using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.Services.Contracts;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;

namespace CZS.Web.Services
{
    public class DiscordAPIService: IDiscordAPIService
    {
        private const string DiscordRoot = "https://discordapp.com/";
        private const string RedirectURL = "http://localhost:52894/Discord/Callback";
        private readonly string _clientID;
        private readonly string _secret;
        private readonly DataContext _db;
        private readonly IUserSessionService _userSession;

        public DiscordAPIService(IConfiguration config, DataContext db, IUserSessionService userSession)
        {
            _clientID = config.GetSection("AppSettings").GetValue<string>("DiscordOAuthClientID");
            _secret = config.GetSection("AppSettings").GetValue<string>("DiscordOAuthClientSecret");
            _db = db;
            _userSession = userSession;
        }

        public string BuildAuthorizeURL()
        {
            return $"{DiscordRoot}oauth2/authorize?client_id={_clientID}&scope=identify%20email&response_type=code&redirect_uri={RedirectURL}";
        }

        public async Task<string> HandleCallbackAsync(string code, string error)
        {
            if (string.IsNullOrWhiteSpace(code) || !string.IsNullOrWhiteSpace(error))
            {
                return "/"; // Redirect to home
            }

            string authorizationURL = $"{DiscordRoot}api/oauth2/token?code={code}&redirect={RedirectURL}";

            HttpClient client = new HttpClient();

            var data = new Dictionary<string, string>()
            {
                { "client_id", _clientID },
                { "client_secret", _secret },
                { "grant_type", "authorization_code" },
                { "code", code },
                { "redirect_uri", RedirectURL }
            };

            var response = await client.PostAsync(authorizationURL, new FormUrlEncodedContent(data));
            var responseString = await response.Content.ReadAsStringAsync();
            var json = JObject.Parse(responseString);

            Users user = new Users
            {
                AccessToken = json["access_token"].Value<string>(),
                DateOfExpiration = DateTime.UtcNow.AddSeconds(json["expires_in"].Value<int>()),
                RefreshToken = json["refresh_token"].Value<string>()
            };

            json = await MakeAPICallAsync("users/@me", user.AccessToken);

            user.Username = json["username"].Value<string>();
            user.Discriminator = json["discriminator"].Value<string>();
            user.Email = json["email"].Value<string>();
            user.DiscordUserId = json["id"].Value<long>();
            
            var existingUser = _db.Users.SingleOrDefault(x => x.DiscordUserId == user.DiscordUserId);
            if (existingUser == null)
            {
                _db.Users.Add(user);
            }
            else
            {
                existingUser.AccessToken = user.AccessToken;
                existingUser.DateOfExpiration = user.DateOfExpiration;
                existingUser.RefreshToken = user.RefreshToken;
                existingUser.Username = user.Username;
                existingUser.Discriminator = user.Discriminator;
                existingUser.Email = user.Email;
                existingUser.DiscordUserId = user.DiscordUserId;

                user.UserId = existingUser.UserId;
            }
            
            _db.SaveChanges();

            _userSession.UserID = user.UserId;

            return "/";
        }

        public async Task<JObject> MakeAPICallAsync(string path, string token)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

            var response = await client.GetAsync($"{DiscordRoot}api/" + path);
            var responseString = await response.Content.ReadAsStringAsync();
            return JObject.Parse(responseString);
        }
    }
}
