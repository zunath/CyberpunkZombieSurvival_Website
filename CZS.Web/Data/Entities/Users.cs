using System;

namespace CZS.Web.Data.Entities
{
    public partial class Users
    {
        public long UserId { get; set; }
        public long DiscordUserId { get; set; }
        public string Username { get; set; }
        public string Discriminator { get; set; }
        public string Email { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public DateTime DateOfExpiration { get; set; }
    }
}
