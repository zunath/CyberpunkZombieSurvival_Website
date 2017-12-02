using CZS.Web.Extensions;
using CZS.Web.Services.Contracts;
using Microsoft.AspNetCore.Http;

namespace CZS.Web.Services
{
    public class UserSessionService: IUserSessionService
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public UserSessionService(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public long UserID
        {
            get
            {
                long userID = _contextAccessor.HttpContext.Session.Get<long>("UserID");
                return userID <= 0 ? -1 : userID;
            }
            set => _contextAccessor.HttpContext.Session.Set("UserID", value);
        }
    }
}
