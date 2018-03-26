using System.Collections.Generic;
using System.Linq;
using CZS.Web.Attributes;
using CZS.Web.Constants;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;
using Microsoft.AspNetCore.Authorization;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin, RoleType.DM)]
    public class ChatLogsViewModel: PaginateBaseVM
    {
        public ChatLogsViewModel(DataContext db) 
            : base(BuildClientData(db),
                  nameof(ChatLog.ChatLogId))
        {
            
        }

        private static IEnumerable<dynamic> BuildClientData(DataContext db)
        {
            return db.ChatLog.OrderByDescending(x => x.DateSent);
        }

    }
}
