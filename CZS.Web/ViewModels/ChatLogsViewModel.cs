using System;
using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class ChatLogsViewModel: BaseVM
    {
        private readonly DataContext _db;
        private const int RecordsPerPage = 15;

        public IEnumerable<ChatLog> ChatLogs
        {
            get
            {
                var records = Paginate(_db.ChatLog.OrderByDescending(x => x.DateSent));
                Pages = _db.ChatLog.Count() / RecordsPerPage;

                return records;
            }
        }

        public string ChatLogs_itemkey => nameof(ChatLog.ChatLogId);

        public int SelectedPage
        {
            get => Get<int>();
            set
            {
                Set(value);
                Changed(nameof(ChatLogs));
            }
        }

        public int[] Pagination
        {
            get => Get<int[]>();
            set
            {
                Set(value);
                SelectedPage = 1;
            }
        }

        public int Pages
        {
            get => Get<int>();
            set => Set(value);
        }

        public Action<int> ChangePage => page =>
        {
            SelectedPage = page;
        };

        public ChatLogsViewModel(DataContext db)
        {
            _db = db;
        }
        
        private IEnumerable<ChatLog> Paginate(IEnumerable<ChatLog> chatLogs)
        {
            if (ChangedProperties.ContainsKey(nameof(SelectedPage)))
                return chatLogs.Skip(RecordsPerPage * (SelectedPage - 1)).Take(RecordsPerPage);
            else
            {
                var enumerable = chatLogs as IList<ChatLog> ?? chatLogs.ToList();
                var pageCount = (int)Math.Ceiling(enumerable.Count / (double)RecordsPerPage);
                Pagination = Enumerable.Range(1, pageCount).ToArray();
                return enumerable.Take(RecordsPerPage);
            }
        }
    }
}
