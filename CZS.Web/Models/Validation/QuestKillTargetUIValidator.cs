using CZS.Web.Models.UI.QuestEditor;
using FluentValidation;

namespace CZS.Web.Models.Validation
{
    public class QuestKillTargetUIValidator: AbstractValidator<QuestKillTargetUI>
    {
        public QuestKillTargetUIValidator()
        {
            RuleFor(x => x.NPCGroupID)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(1);

            RuleFor(x => x.Quantity)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(1);
        }
    }
}
