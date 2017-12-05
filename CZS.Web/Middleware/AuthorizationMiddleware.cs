using System;
using System.Linq;
using System.Threading.Tasks;
using CZS.Web.Attributes;
using CZS.Web.Models.Contracts;
using CZS.Web.ViewModels;
using DotNetify;
using Microsoft.AspNetCore.SignalR;
using IMiddleware = DotNetify.IMiddleware;

namespace CZS.Web.Middleware
{
    public class AuthorizationMiddleware: IMiddleware
    {
        private readonly ICurrentUser _currentUser;

        public AuthorizationMiddleware(ICurrentUser currentUser)
        {
            _currentUser = currentUser;
        }

        public Task Invoke(DotNetifyHubContext context, NextDelegate next)
        {
            Type type = Type.GetType($"{typeof(HomeViewModel).Namespace}.{context.VMId}");

            RoleRequiredAttribute attribute = type.GetCustomAttributes(typeof(RoleRequiredAttribute), true).FirstOrDefault() as RoleRequiredAttribute;
            
            if (attribute != null)
            {
                if (!attribute.RolesRequired.Contains(_currentUser.Role))
                {
                    return null;
                }
            }

            return next(context);
        }
    }
}
