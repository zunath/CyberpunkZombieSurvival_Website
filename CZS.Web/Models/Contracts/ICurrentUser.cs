using CZS.Web.Constants;

namespace CZS.Web.Models.Contracts
{
    public interface ICurrentUser
    {
        bool IsAuthenticated { get; }
        string Username { get; }
        string DiscordUserID { get; }
        string Email { get; }
        string Discriminator { get; }
        string AvatarHash { get; }
        RoleType Role { get; }
    }
}
