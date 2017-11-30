using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class ConnectionLogsViewModel: PaginateBaseVM
    {
        public ConnectionLogsViewModel(DataContext db)
            :base(BuildClientData(db),
                 nameof(ClientLogEvents.ClientLogEventId))
        {
        }

        private static IEnumerable<dynamic> BuildClientData(DataContext db)
        {
            return db.ClientLogEvents.OrderByDescending(o => o.DateOfEvent)
                .Select(x => new
                {
                    ClientLogEventID = x.ClientLogEventId,
                    DateOfEvent = x.DateOfEvent,
                    EventTypeID = x.ClientLogEventTypeId,
                    PlayerName = x.Player.CharacterName,
                    CDKey = x.Cdkey,
                    AccountName = x.AccountName
                });
        }
    }
}
