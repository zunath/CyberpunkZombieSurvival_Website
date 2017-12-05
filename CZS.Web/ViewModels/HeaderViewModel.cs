using CZS.Web.Constants;
using CZS.Web.Models.Contracts;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class HeaderViewModel : BaseVM
    {
        public HeaderViewModel(ICurrentUser currentUser)
        {
            if (currentUser.IsAuthenticated)
            {
                Username = currentUser.Username;
                Role = currentUser.Role;
            }
        }

        public string Username
        {
            get => Get<string>();
            set => Set(value);
        }

        public RoleType Role
        {
            get => Get<RoleType>();
            set => Set(value);
        }
    }

}
