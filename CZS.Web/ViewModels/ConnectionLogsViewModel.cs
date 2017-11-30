using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ConnectionLogsViewModel: BaseVM
    {
        public IEnumerable<ClientLogEvents> ConnectionLogs { get; set; }

        public string ConnectionLogs_itemkey => nameof(ClientLogEvents.ClientLogEventId);

        public ConnectionLogsViewModel(DataContext db)
        {
            ConnectionLogs = db.ClientLogEvents.OrderByDescending(o => o.DateOfEvent).ToList();
        }
    }
}
