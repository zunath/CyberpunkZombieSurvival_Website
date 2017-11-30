using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class QuickBuildLogsViewModel: BaseVM
    {
        public IEnumerable<StructureQuickBuildAudit> QuickBuildLogs { get; set; }

        public string QuickBuildLogs_itemkey => nameof(StructureQuickBuildAudit.StructureQuickBuildId);

        public QuickBuildLogsViewModel(DataContext db)
        {
            QuickBuildLogs = db.StructureQuickBuildAudit.OrderByDescending(o => o.DateBuilt).ToList();
        }
    }
}
