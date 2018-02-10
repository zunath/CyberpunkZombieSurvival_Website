using System;
using System.Collections.Generic;
using System.Linq;
using CZS.Web.Attributes;
using CZS.Web.Constants;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.Models.UI.QuestEditor;
using CZS.Web.Models.Validation;
using DotNetify;
using Microsoft.EntityFrameworkCore;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin)]
    public class QuestEditorViewModel: BaseVM
    {
        private readonly DataContext _db;

        public string Quests_itemkey => nameof(QuestInfoUI.QuestID);
        public IEnumerable<QuestInfoUI> Quests
        {
            get => Get<IEnumerable<QuestInfoUI>>();
            set => Set(value);
        }

        public int ActiveQuestID
        {
            get => Get<int>();
            set => Set(value);
        }

        public QuestDetailsUI ActiveQuest
        {
            get => Get<QuestDetailsUI>();
            set => Set(value);
        }

        public string KeyItems_itemkey => nameof(QuestKeyItemUI.KeyItemID);
        public IEnumerable<QuestKeyItemUI> KeyItems
        {
            get => Get<IEnumerable<QuestKeyItemUI>>();
            set => Set(value);
        }

        public string FameRegions_itemkey => nameof(QuestFameRegionUI.FameRegionID);
        public IEnumerable<QuestFameRegionUI> FameRegions
        {
            get => Get<IEnumerable<QuestFameRegionUI>>();
            set => Set(value);
        }

        public string QuestTypes_itemkey => nameof(QuestTypeUI.QuestTypeID);
        public IEnumerable<QuestTypeUI> QuestTypes
        {
            get => Get<IEnumerable<QuestTypeUI>>();
            set => Set(value);
        }

        public string NPCGroups_itemkey => nameof(QuestNPCGroupUI.NPCGroupID);
        public IEnumerable<QuestNPCGroupUI> NPCGroups
        {
            get => Get<IEnumerable<QuestNPCGroupUI>>();
            set => Set(value);
        }
        
        private bool _showNotification;
        public bool ShowNotification
        {
            get
            {
                var value = _showNotification;
                _showNotification = false;
                return value;
            }
            set
            {
                _showNotification = value;
                Changed(nameof(ShowNotification));
            }
        }

        public string NotificationMessage
        {
            get => Get<string>();
            set => Set(value);
        }

        public bool NotificationSuccessful
        {
            get => Get<bool>();
            set => Set(value);
        }

        private void LoadQuestList()
        {
            var quests = _db.Quests.OrderBy(o => o.Name)
                .Select(x => new QuestInfoUI
                {
                    Name = x.Name,
                    QuestID = x.QuestId
                }).ToList();

            QuestInfoUI selectOption = new QuestInfoUI()
            {
                Name = "Select a quest...",
                QuestID = -1
            };

            quests.Insert(0, selectOption);

            Quests = quests;
        }

        public QuestEditorViewModel(DataContext db)
        {
            _db = db;

            LoadQuestList();
            ActiveQuest = new QuestDetailsUI{QuestID = -1};

            var keyItems = _db.KeyItems.OrderBy(x => x.Name)
                .Select(x => new QuestKeyItemUI
                {
                    Name = x.Name,
                    KeyItemID = x.KeyItemId
                }).ToList();

            QuestKeyItemUI selectKeyItem = new QuestKeyItemUI
            {
                Name = "None",
                KeyItemID = -1
            };
            keyItems.Insert(0, selectKeyItem);

            KeyItems = keyItems;

            var fameRegions = _db.FameRegions.OrderBy(x => x.Name)
                .Select(x => new QuestFameRegionUI
                {
                    Name = x.Name,
                    FameRegionID = x.FameRegionId
                }).ToList();
            
            FameRegions = fameRegions;

            QuestTypes = _db.QuestTypeDomain.OrderBy(x => x.QuestTypeId)
                .Select(x => new QuestTypeUI
                {
                    QuestTypeID = x.QuestTypeId,
                    Name = x.Name
                }).ToList();

            NPCGroups = _db.NPCGroups.OrderBy(x => x.NpcgroupId)
                .Select(x => new QuestNPCGroupUI
                {
                    NPCGroupID = x.NpcgroupId,
                    Name = x.Name
                }).ToList();

        }

        public Action<int> DeleteQuest => questID =>
        {
            var dbQuest = _db.Quests.SingleOrDefault(x => x.QuestId == questID);
            if (dbQuest == null) return;

            _db.QuestRewardItems.RemoveRange(dbQuest.QuestRewardItems);
            _db.QuestRequiredItemList.RemoveRange(dbQuest.QuestRequiredItemList);
            _db.QuestRequiredKeyItemList.RemoveRange(dbQuest.QuestRequiredKeyItemList);
            _db.QuestPrerequisites.RemoveRange(dbQuest.QuestPrerequisitesQuest);
            _db.QuestKillTargetList.RemoveRange(dbQuest.QuestKillTargetList);
            _db.QuestStates.RemoveRange(dbQuest.QuestStates);
            _db.Quests.Remove(dbQuest);

            try
            {
                _db.SaveChanges();
                NotificationMessage = "Quest '" + dbQuest.Name + "' deleted successfully!";
                NotificationSuccessful = true;
                ShowNotification = true;

                LoadQuestList();
                ActiveQuest = new QuestDetailsUI { QuestID = -1 };
            }
            catch(Exception ex)
            {
                NotificationMessage = "Failed to delete quest '" + dbQuest.Name + "'..." + Environment.NewLine + "Reason: " + ex.Message;
                NotificationSuccessful = false;
                ShowNotification = true;
            }
            
        };

        public Action<int> ChangeQuest => LoadQuestUIObject;

        public Action<int> DiscardChanges => LoadQuestUIObject;

        private void LoadQuestUIObject(int questID)
        {
            if (questID <= -1)
            {
                ActiveQuest = new QuestDetailsUI { QuestID = questID == -1 ? -1 : -2 };
                return;
            }

            var quest = _db.Quests
                .SingleOrDefault(x => x.QuestId == questID);

            if (quest == null)
            {
                ActiveQuest = new QuestDetailsUI();
                return;
            }
            _db.Entry(quest)
                .Collection(x => x.QuestPrerequisitesQuest)
                .Load();

            _db.Entry(quest)
                .Collection(x => x.QuestKillTargetList)
                .Load();

            _db.Entry(quest)
                .Collection(x => x.QuestRequiredItemList)
                .Load();

            _db.Entry(quest)
                .Collection(x => x.QuestRequiredKeyItemList)
                .Load();

            _db.Entry(quest)
                .Collection(x => x.QuestRewardItems)
                .Load();

            _db.Entry(quest)
                .Collection(x => x.QuestStates)
                .Load();

            ActiveQuest = BuildQuestUIObject(quest);
        }

        private static QuestDetailsUI BuildQuestUIObject(Quests quest)
        {
            var uiQuest = new QuestDetailsUI
            {
                QuestID = quest.QuestId,
                Name = quest.Name,
                JournalTag = quest.JournalTag,
                FameRegionID = quest.FameRegionId,
                RequiredFameAmount = quest.RequiredFameAmount,
                AllowRewardSelection = quest.AllowRewardSelection,
                IsRepeatable = quest.IsRepeatable,
                MapNoteTag = quest.MapNoteTag,
                StartKeyItemID = quest.StartKeyItemId ?? -1,
                RemoveStartKeyItemAfterCompletion = quest.RemoveStartKeyItemAfterCompletion,
                Rewards = new QuestRewardsUI
                {
                    Fame = quest.RewardFame,
                    Gold = quest.RewardGold,
                    KeyItemID = quest.RewardKeyItemId ?? -1,
                    XP = quest.RewardXp,
                    RewardItems = quest.QuestRewardItems.Select(x => new QuestRewardItemUI()
                    {
                        Quantity = x.Quantity,
                        Resref = x.Resref
                    }).ToList()
                },
                PrerequisiteQuestIDs = quest.QuestPrerequisitesQuest.Select(x => x.RequiredQuestId).ToList(),
                QuestStates = quest.QuestStates.Select(x => new QuestStateUI
                {
                    QuestTypeID = x.QuestTypeId,
                    JournalStateID = x.JournalStateId,
                    KillTargets = x.QuestKillTargetList.Select(y => new QuestKillTargetUI
                    {
                        Quantity = y.Quantity,
                        NPCGroupID = y.NpcgroupId
                    }).ToList(),
                    RequiredItems = x.QuestRequiredItemList.Select(y => new QuestRequiredItemUI
                    {
                        Quantity = y.Quantity,
                        Resref = y.Resref
                    }).ToList(),
                    RequiredKeyItems = x.QuestRequiredKeyItemList.Select(y => new QuestRequiredKeyItemUI
                    {
                        RequiredKeyItemID = y.KeyItemId
                    }).ToList()
                    
                }).ToList()
            };
            
            return uiQuest;
        }

        public Action<QuestDetailsUI> SaveChanges => questDetails =>
        {
            int originalQuestID = questDetails.QuestID;

            if (questDetails.QuestID < -1)
                questDetails.QuestID = 0;

            QuestDetailsUIValidator validator = new QuestDetailsUIValidator();
            var result = validator.Validate(questDetails);
            if (!result.IsValid)
            {
                NotificationMessage = "Error saving quest: " + Environment.NewLine + Environment.NewLine;
                foreach (var error in result.Errors)
                {
                    NotificationMessage += error.ErrorMessage + Environment.NewLine;
                }
                NotificationSuccessful = false;
                ShowNotification = true;
                questDetails.QuestID = originalQuestID;
                return;
            }

            var quest = _db.Quests.SingleOrDefault(x => x.QuestId == questDetails.QuestID) ?? new Quests();

            quest.Name = questDetails.Name;
            quest.JournalTag = questDetails.JournalTag;
            quest.FameRegionId = questDetails.FameRegionID;
            quest.RequiredFameAmount = questDetails.RequiredFameAmount;
            quest.AllowRewardSelection = questDetails.AllowRewardSelection;
            quest.RewardGold = questDetails.Rewards.Gold;
            quest.RewardXp = questDetails.Rewards.XP;

            if (questDetails.Rewards.KeyItemID <= 0) quest.RewardKeyItemId = null;
            else quest.RewardKeyItemId = questDetails.Rewards.KeyItemID;

            quest.RewardFame = questDetails.Rewards.Fame;
            quest.IsRepeatable = questDetails.IsRepeatable;
            quest.MapNoteTag = questDetails.MapNoteTag;

            if (questDetails.StartKeyItemID <= 0) quest.StartKeyItemId = null;
            else quest.StartKeyItemId = questDetails.StartKeyItemID;

            quest.RemoveStartKeyItemAfterCompletion = questDetails.RemoveStartKeyItemAfterCompletion;

            // Prerequisites
            _db.QuestPrerequisites.RemoveRange(quest.QuestPrerequisitesQuest);
            quest.QuestPrerequisitesQuest.Clear();
            foreach (var prereq in questDetails.PrerequisiteQuestIDs)
            {
                QuestPrerequisites dbPrereq = new QuestPrerequisites
                {
                    RequiredQuestId = prereq,
                    Quest = quest
                };

                quest.QuestPrerequisitesQuest.Add(dbPrereq);
                _db.Entry(dbPrereq).State = EntityState.Added;
            }

            // Quest States
            foreach (var qs in quest.QuestStates)
            {
                _db.QuestKillTargetList.RemoveRange(qs.QuestKillTargetList);
                _db.QuestRequiredItemList.RemoveRange(qs.QuestRequiredItemList);
                _db.QuestRequiredKeyItemList.RemoveRange(qs.QuestRequiredKeyItemList);
            }
            _db.QuestStates.RemoveRange(quest.QuestStates);
            quest.QuestStates.Clear();

            int sequence = 0;
            foreach (var state in questDetails.QuestStates)
            {
                sequence++;
                QuestStates dbState = new QuestStates
                {
                    Quest = quest,
                    Sequence = sequence,
                    QuestTypeId = state.QuestTypeID,
                    JournalStateId = state.JournalStateID,
                    IsFinalState = sequence == questDetails.QuestStates.Count
                };

                if (state.QuestTypeID == (int)QuestType.KillEnemies)
                {
                    foreach (var kt in state.KillTargets)
                    {
                        QuestKillTargetList dbKT = new QuestKillTargetList
                        {
                            NpcgroupId = kt.NPCGroupID,
                            Quantity = kt.Quantity,
                            Quest = quest,
                            QuestState = dbState
                        };

                        dbState.QuestKillTargetList.Add(dbKT);
                        _db.Entry(dbKT).State = EntityState.Added;
                    }
                }
                else if (state.QuestTypeID == (int) QuestType.CollectItems)
                {
                    foreach (var ri in state.RequiredItems)
                    {
                        QuestRequiredItemList dbRI = new QuestRequiredItemList
                        {
                            Resref = ri.Resref,
                            Quantity = ri.Quantity,
                            Quest = quest,
                            QuestState = dbState
                        };

                        dbState.QuestRequiredItemList.Add(dbRI);
                        _db.Entry(dbRI).State = EntityState.Added;
                    }

                    foreach (var kri in state.RequiredKeyItems)
                    {
                        QuestRequiredKeyItemList dbKRI = new QuestRequiredKeyItemList
                        {
                            KeyItemId = kri.RequiredKeyItemID,
                            Quest = quest,
                            QuestState = dbState
                        };

                        dbState.QuestRequiredKeyItemList.Add(dbKRI);
                        _db.Entry(dbKRI).State = EntityState.Added;
                    }
                }

                quest.QuestStates.Add(dbState);
                _db.Entry(dbState).State = EntityState.Added;
            }

            // Reward Items
            _db.QuestRewardItems.RemoveRange(quest.QuestRewardItems);
            quest.QuestRewardItems.Clear();
            foreach (var reward in questDetails.Rewards.RewardItems)
            {
                QuestRewardItems dbReward = new QuestRewardItems
                {
                    Quantity = reward.Quantity,
                    Resref = reward.Resref,
                    Quest = quest
                };

                quest.QuestRewardItems.Add(dbReward);
                _db.Entry(dbReward).State = EntityState.Added;
            }
            

            if (quest.QuestId <= 0)
            {
                _db.Quests.Add(quest);
            }

            try
            {
                _db.SaveChanges();
                NotificationMessage = "Changes were saved successfully.";
                NotificationSuccessful = true;
                LoadQuestList();
                ActiveQuestID = quest.QuestId;
                ActiveQuest = BuildQuestUIObject(quest);
            }
            catch
            {
                NotificationMessage = "Failed to save changes. Ensure all fields are entered in properly.";
                NotificationSuccessful = false;
            }
            
            ShowNotification = true;
        };
    }
}
