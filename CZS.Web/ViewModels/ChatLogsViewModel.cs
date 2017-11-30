using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class ChatLogsViewModel: PaginateBaseVM<ChatLog>
    {
        public ChatLogsViewModel(DataContext db) 
            : base(db.ChatLog.OrderByDescending(x => x.DateSent),
                  nameof(ChatLog.ChatLogId))
        {
            
        }
        
    }
}
