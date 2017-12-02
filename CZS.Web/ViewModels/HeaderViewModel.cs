using System.Linq;
using CZS.Web.Data;
using CZS.Web.Services.Contracts;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class HeaderViewModel : BaseVM
    {
        public HeaderViewModel(IUserSessionService userSession, DataContext db)
        {
            if (userSession.UserID > 0)
            {
                var user = db.Users.Single(x => x.UserId == userSession.UserID);
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
