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
            long discordUserID = Convert.ToInt64(context.User.Claims.Where(x => x.Type == ClaimTypes.NameIdentifier).Select(x => x.Value).SingleOrDefault());

            if (discordUserID > 0)
            {
                var user = db.Users.Single(x => x.DiscordUserId == Convert.ToInt64(discordUserID));
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
