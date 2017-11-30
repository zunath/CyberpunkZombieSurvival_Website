using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ConnectionLogViewModel: BaseVM
    {
        public IEnumerable<ClientLogEvents> ConnectionLogs { get; set; }

        public string ConnectionLogs_itemkey => nameof(ClientLogEvents.ClientLogEventId);

        public ConnectionLogViewModel(DataContext db)
        {
            ConnectionLogs = db.ClientLogEvents.OrderBy(o => o.DateOfEvent).ToList();
        }
    }
}
