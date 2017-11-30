using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class QuickBuildLogViewModel: BaseVM
    {
        public IEnumerable<StructureQuickBuildAudit> QuickBuildLogs { get; set; }

        public string QuickBuildLogs_itemkey => nameof(StructureQuickBuildAudit.StructureQuickBuildId);

        public QuickBuildLogViewModel(DataContext db)
        {
            QuickBuildLogs = db.StructureQuickBuildAudit.OrderBy(o => o.DateBuilt).ToList();
        }
    }
}
