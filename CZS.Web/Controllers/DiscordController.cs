using System.Threading.Tasks;
using CZS.Web.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CZS.Web.Controllers
{
    public class DiscordController : Controller
    {
        private readonly IDiscordAPIService _discordAPI;

        public DiscordController(IDiscordAPIService discordAPI)
        {
            _discordAPI = discordAPI;
        }

        public IActionResult Login()
        {
            return Redirect(_discordAPI.BuildAuthorizeURL());
        }

        public async Task<IActionResult> Callback(string code, string error)
        {
            string url = await _discordAPI.HandleCallbackAsync(code, error);
            return Redirect(url);
        }
    }
}