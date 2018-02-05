using System.Collections.Generic;

namespace CZS.Web.Models.UI.QuestEditor
{
    public class QuestStateUI
    {
        public int QuestTypeID { get; set; }
        public int JournalStateID { get; set; }
        public bool IsFinalState { get; set; }

        public List<QuestKillTargetUI> KillTargets { get; set; }

        public QuestStateUI()
        {
            KillTargets = new List<QuestKillTargetUI>();
        }
    }
}
