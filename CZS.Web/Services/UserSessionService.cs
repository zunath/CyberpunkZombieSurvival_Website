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

        public UserSession UserSession
        {
            get
            {
                UserSession userSession = _contextAccessor.HttpContext.Session.Get<UserSession>("UserSession");
                return userSession;
            }
            set => _contextAccessor.HttpContext.Session.Set("UserSession", value);
        }
    }
}
