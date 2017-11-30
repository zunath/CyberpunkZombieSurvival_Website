using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class DownloadsViewModel: BaseVM
    {
        public IEnumerable<Downloads> DownloadList { get; set; }

        public DownloadsViewModel(DataContext db)
        {
            DownloadList = db.Downloads
                .Where(x => x.IsActive)
                .ToList();
        }
    }
}
