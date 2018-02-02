namespace CZS.Web.Models
{
    public class QuestInfo
    {
        public int QuestID { get; set; }
        public string Name { get; set; }

        public QuestInfo()
        {
            QuestID = 0;
            Name = string.Empty;
        }
    }

}
