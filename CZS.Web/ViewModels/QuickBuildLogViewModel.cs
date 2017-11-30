using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class QuickBuildLogViewModel: BaseVM
    {
        public List<StructureQuickBuildAudit> QuickBuildLogs { get; set; }

        public string QuickBuildLogs_itemkey => nameof(StructureQuickBuildAudit.StructureQuickBuildId);

        public QuickBuildLogViewModel()
        {
        }
    }
}
