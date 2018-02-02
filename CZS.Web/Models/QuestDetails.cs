namespace CZS.Web.Models
{
    public class QuestDetails
    {
        public int QuestID { get; set; }
        public string Name { get; set; }
        public string JournalTag { get; set; }
        public int FameRegionID { get; set; }
        public int RequiredFameAmount { get; set; }
        public bool AllowRewardSelection { get; set; }
        public int RewardGold { get; set; }
        public int RewardXP { get; set; }
        public int RewardKeyItemID { get; set; }
        public int RewardFame { get; set; }
        public bool IsRepeatable { get; set; }
        public string MapNoteTag { get; set; }
        public int StartKeyItemID { get; set; }
        public bool RemoveStartKeyItemAfterCompletion { get; set; }

        public QuestDetails()
        {
            QuestID = 0;
            Name = string.Empty;
            JournalTag = string.Empty;
            FameRegionID = 0;
            RequiredFameAmount = 0;
            AllowRewardSelection = false;
            RewardGold = 0;
            RewardXP = 0;
            RewardKeyItemID = -1;
            RewardFame = 0;
            IsRepeatable = false;
            MapNoteTag = string.Empty;
            StartKeyItemID = -1;
            RemoveStartKeyItemAfterCompletion = false;
        }
    }

}
