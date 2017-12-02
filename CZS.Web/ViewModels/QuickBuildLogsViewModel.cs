using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class QuickBuildLogsViewModel: PaginateBaseVM
    {
        public QuickBuildLogsViewModel(DataContext db)
            : base(BuildClientData(db),
                  nameof(StructureQuickBuildAudit.StructureQuickBuildId))
        {
        }

        private static IEnumerable<dynamic> BuildClientData(DataContext db)
        {
            return db.StructureQuickBuildAudit.OrderByDescending(o => o.DateBuilt)
                .Select(x => new
                {
                    QuickBuildID = x.StructureQuickBuildId,
                    PCTerritoryFlagID = x.PcterritoryFlagId,
                    PCStructureID = x.PcterritoryFlagStructureId,
                    DMName = x.Dmname,
                    DateBuilt = x.DateBuilt
                });
        }
    }
}
