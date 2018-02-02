using System;
using System.Collections.Generic;
using System.Linq;
using CZS.Web.Attributes;
using CZS.Web.Constants;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.Models;
using DotNetify;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin)]
    public class QuestEditorViewModel: BaseVM
    {
        private readonly DataContext _db;

        public string Quests_itemkey => nameof(QuestInfo.QuestID);
        public IEnumerable<QuestInfo> Quests
        {
            get => Get<IEnumerable<QuestInfo>>();
            set => Set(value);
        }
        
        public QuestDetails ActiveQuest
        {
            get => Get<QuestDetails>();
            set => Set(value);
        }

        public string KeyItems_itemkey => nameof(QuestKeyItem.KeyItemID);
        public IEnumerable<QuestKeyItem> KeyItems
        {
            get => Get<IEnumerable<QuestKeyItem>>();
            set => Set(value);
        }

        public QuestEditorViewModel(DataContext db)
        {
            _db = db;

            var quests = _db.Quests.OrderBy(o => o.Name)
                .Select(x => new QuestInfo
                {
                    Name = x.Name,
                    QuestID = x.QuestId
                }).ToList();

            QuestInfo selectOption = new QuestInfo()
            {
                Name = "Select a quest...",
                QuestID = -1
            };

            quests.Insert(0, selectOption);

            Quests = quests;
            ActiveQuest = new QuestDetails{QuestID = -1};

            var keyItems = _db.KeyItems.OrderBy(x => x.Name)
                .Select(x => new QuestKeyItem
                {
                    Name = x.Name,
                    KeyItemID = x.KeyItemId
                }).ToList();

            QuestKeyItem selectKeyItem = new QuestKeyItem
            {
                Name = "None",
                KeyItemID = -1
            };
            keyItems.Insert(0, selectKeyItem);

            KeyItems = keyItems;
        }

        public Action<int> ChangeQuest => questID =>
        {
            if (questID <= -1)
            {
                ActiveQuest = new QuestDetails { QuestID = -1 };
                return;
            }

            var quest = _db.Quests
                .SingleOrDefault(x => x.QuestId == questID);

            if (quest == null)
            {
                ActiveQuest = new QuestDetails();
                return;
            }

            ActiveQuest = new QuestDetails
            {
                QuestID = quest.QuestId,
                Name = quest.Name,
                JournalTag = quest.JournalTag,
                FameRegionID = quest.FameRegionId,
                RequiredFameAmount = quest.RequiredFameAmount,
                AllowRewardSelection = quest.AllowRewardSelection,
                RewardGold = quest.RewardGold,
                RewardXP = quest.RewardXp,
                RewardKeyItemID = quest.RewardKeyItemId ?? -1,
                RewardFame = quest.RewardFame,
                IsRepeatable = quest.IsRepeatable,
                MapNoteTag = quest.MapNoteTag,
                StartKeyItemID = quest.StartKeyItemId ?? -1,
                RemoveStartKeyItemAfterCompletion = quest.RemoveStartKeyItemAfterCompletion
            };
        };
    }
}
