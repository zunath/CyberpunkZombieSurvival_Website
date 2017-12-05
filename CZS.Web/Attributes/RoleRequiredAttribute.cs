using System;
using CZS.Web.Constants;

namespace CZS.Web.Attributes
{
    public class RoleRequiredAttribute: Attribute
    {
        public RoleType[] RolesRequired { get; }

        public RoleRequiredAttribute(params RoleType[] roles)
        {
            RolesRequired = roles;
        }
    }
}
