using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace CZS.Web.Services.Contracts
{
    public interface IDiscordAPIService
    {
        string BuildAuthorizeURL();
        Task<string> HandleCallbackAsync(string code, string error);
        Task<JObject> MakeAPICallAsync(string path, string token);
    }
}
