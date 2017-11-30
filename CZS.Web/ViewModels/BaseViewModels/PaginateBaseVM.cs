using System;
using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels.BaseViewModels
{
    public abstract class PaginateBaseVM<T>: BaseVM
    {
        private readonly int _recordsPerPage;

        private IEnumerable<T> FullItems { get; }

        protected PaginateBaseVM(IEnumerable<T> fullItems,
            string itemKeyName,
            int recordsPerPage = 15)
        {
            FullItems = fullItems;
            _recordsPerPage = recordsPerPage;
            PaginatedItems_itemkey = itemKeyName;
        }

        public IEnumerable<T> PaginatedItems
        {
            get
            {
                var records = Paginate(FullItems);
                Pages = FullItems.Count() / _recordsPerPage;

                return records;
            }
        }

        public string PaginatedItems_itemkey { get; }

        public int SelectedPage
        {
            get => Get<int>();
            set
            {
                Set(value);
                Changed(nameof(PaginatedItems));
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


        private IEnumerable<T> Paginate(IEnumerable<T> chatLogs)
        {
            if (ChangedProperties.ContainsKey(nameof(SelectedPage)))
                return chatLogs.Skip(_recordsPerPage * (SelectedPage)).Take(_recordsPerPage);
            else
            {
                var enumerable = chatLogs as IList<T> ?? chatLogs.ToList();
                var pageCount = (int)Math.Ceiling(enumerable.Count / (double)_recordsPerPage);
                Pagination = Enumerable.Range(1, pageCount).ToArray();
                return enumerable.Take(_recordsPerPage);
            }
        }
    }
}
