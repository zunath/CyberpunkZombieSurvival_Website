using System.Collections.Generic;
using System.Linq;
using CZS.Web.Attributes;
using CZS.Web.Constants;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin, RoleType.DM)]
    public class QuickBuildLogsViewModel: PaginateBaseVM
    {
        public QuickBuildLogsViewModel(DataContext db)
            : base(BuildClientData(db),
                  nameof(StructureQuickBuildAudit.StructureQuickBuildId))
        {
        }

        private static IEnumerable<dynamic> BuildClientData(DataContext db)
        {
            return db.StructureQuickBuildAudit.OrderByDescending(o => o.DateBuilt);
        }
    }
}
