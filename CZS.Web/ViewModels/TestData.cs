using System.Threading;
using DotNetify;

namespace CZS.Web.ViewModels
{
    public class TestData: BaseVM
    {
        private Timer _timer;
        public string TestValue => "display this data";


        public TestData()
        {
            _timer = new Timer(state =>
            {
                Changed(nameof(TestValue));
                PushUpdates();
            }, null, 0, 1000); // every 1000 ms.
        }

    }
}
