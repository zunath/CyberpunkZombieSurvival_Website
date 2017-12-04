using System;
using System.Linq;
using System.Security.Claims;
using CZS.Web.Data;
using DotNetify;
using Microsoft.AspNetCore.Http;

namespace CZS.Web.ViewModels
{
    public class HeaderViewModel : BaseVM
    {
        public HeaderViewModel(DataContext db, IHttpContextAccessor httpContextAccessor)
        {
            var context = httpContextAccessor.HttpContext;
            string discordUserID = context.User.Claims.Where(x => x.Type == ClaimTypes.NameIdentifier).Select(x => x.Value).SingleOrDefault();

            if (!string.IsNullOrWhiteSpace(discordUserID))
            {
                var user = db.Users.Single(x => x.DiscordUserId == discordUserID);
                Username = user.Username;
            }

        }

        public string Username
        {
            get => Get<string>();
            set => Set(value);
        }
    }

}
