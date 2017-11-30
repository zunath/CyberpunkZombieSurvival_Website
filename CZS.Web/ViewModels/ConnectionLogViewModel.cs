using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ConnectionLogViewModel: BaseVM
    {
        public List<ClientLogEvents> ConnectionLogs { get; set; }

        public string ConnectionLogs_itemkey => nameof(ClientLogEvents.ClientLogEventId);

        public ConnectionLogViewModel()
        {
        }
    }
}
