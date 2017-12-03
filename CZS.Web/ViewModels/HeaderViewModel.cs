using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.Services.Contracts;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class HeaderViewModel : BaseVM
    {
        private readonly IDiscordAPIService _discordAPI;
        private readonly Users _user;  

        public HeaderViewModel(IUserSessionService userSession, DataContext db, IDiscordAPIService discordAPI)
        {
            _discordAPI = discordAPI;

            if (userSession.UserSession != null)
            {
                _user = db.Users.Single(x => x.UserId == userSession.UserSession.UserID);
                Username = _user.Username;
            }

        }

        public string Username
        {
            get => Get<string>();
            set
            {
                Set(value);
                Changed(nameof(AvatarURL));
            }
        }

        public string AvatarURL
        {
            get
            {
                if (string.IsNullOrEmpty(Username)) return string.Empty;
                
                var result = _discordAPI.GetUserAvatarURL(_user.DiscordUserId, _user.AvatarHash);

                return result;
            }
        }

    }

}
