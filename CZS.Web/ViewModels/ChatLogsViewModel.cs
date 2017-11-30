using System.Collections.Generic;
using System.Linq;
using CZS.Web.Data;
using CZS.Web.Data.Entities;
using CZS.Web.ViewModels.BaseViewModels;

namespace CZS.Web.ViewModels
{
    public class ChatLogsViewModel: PaginateBaseVM
    {


        public ChatLogsViewModel(DataContext db) 
            : base(BuildClientData(db),
                  nameof(ChatLog.ChatLogId))
        {
            
        }

        private static IEnumerable<dynamic> BuildClientData(DataContext db)
        {
            return db.ChatLog.OrderByDescending(x => x.DateSent)
                .Select(x => new
                {
                    ChatLogID = x.ChatLogId,
                    SenderPlayerName = x.SenderPlayer.CharacterName,
                    SenderAccountName = x.SenderAccountName,
                    SenderCDKey = x.SenderCdkey,
                    ReceiverPlayerName = x.ReceiverPlayer.CharacterName,
                    ReceiverAccountName = x.ReceiverAccountName,
                    ReceiverCDKey = x.ReceiverCdkey,
                    Message = x.Message,
                    DateSent = x.DateSent,
                    SenderDMName = x.SenderDmname,
                    ReceiverDMName = x.ReceiverDmname
                });
        }

    }
}
