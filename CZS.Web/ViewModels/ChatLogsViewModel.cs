using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ChatLogsViewModel: BaseVM
    {
        public IEnumerable<ChatLog> ChatLogs { get; set; }

        public string ChatLogs_itemkey => nameof(ChatLog.ChatLogId);

        public ChatLogsViewModel(DataContext db)
        {
            ChatLogs = db.ChatLog.OrderBy(o => o.DateSent).ToList();
        }
    }
}
