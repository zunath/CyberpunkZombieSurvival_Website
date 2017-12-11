using CZS.Web.Models.Contracts;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class UserProfileViewModel: BaseVM
    {
        public string Username
        {
            get => Get<string>();
            set => Set(value);
        }

        public string AvatarURL
        {
            get => Get<string>();
            set => Set(value);
        }

        public string Email
        {
            get => Get<string>();
            set => Set(value);
        }

        public UserProfileViewModel(ICurrentUser currentUser)
        {
            Username = currentUser.Username;
            AvatarURL = $"https://cdn.discordapp.com/avatars/{currentUser.DiscordUserID}/{currentUser.AvatarHash}.png";
            Email = currentUser.Email;
        }
    }
}
