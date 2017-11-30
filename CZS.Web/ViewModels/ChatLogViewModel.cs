using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ChatLogViewModel: BaseVM
    {
        public IEnumerable<ChatLog> ChatLogs { get; set; }

        public string ChatLogs_itemkey => nameof(ChatLog.ChatLogId);

        public ChatLogViewModel(DataContext dataContext)
        {
            ChatLogs = dataContext.ChatLog.ToList();
        }
    }
}
