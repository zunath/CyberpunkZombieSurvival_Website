using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class ConnectionLogsViewModel: PaginateBaseVM<ClientLogEvents>
    {
        public ConnectionLogsViewModel(DataContext db)
            :base(db.ClientLogEvents.OrderByDescending(o => o.DateOfEvent),
                 nameof(ClientLogEvents.ClientLogEventId))
        {
        }
    }
}
