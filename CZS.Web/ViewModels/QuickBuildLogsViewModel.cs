using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class QuickBuildLogsViewModel: PaginateBaseVM<StructureQuickBuildAudit>
    {
        public QuickBuildLogsViewModel(DataContext db)
            : base(db.StructureQuickBuildAudit.OrderByDescending(o => o.DateBuilt),
                  nameof(StructureQuickBuildAudit.StructureQuickBuildId))
        {
        }
    }
}
