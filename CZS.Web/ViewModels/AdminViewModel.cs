using CZS.Web.Attributes;
using CZS.Web.Constants;
using CZS.Web.Models.Contracts;
using DotNetify;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin, RoleType.DM)]
    public class AdminViewModel: BaseVM
    {
        public AdminViewModel(ICurrentUser currentUser)
        {
            Role = currentUser.Role;
        }

        public RoleType Role
        {
            get => Get<RoleType>();
            set => Set(value);
        }
    }
}
