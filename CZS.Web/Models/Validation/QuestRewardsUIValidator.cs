using CZS.Web.Models.UI.QuestEditor;
using FluentValidation;

namespace CZS.Web.Models.Validation
{
    public class QuestRewardsUIValidator: AbstractValidator<QuestRewardsUI>
    {
        public QuestRewardsUIValidator()
        {
            RuleFor(x => x.Gold)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(0)
                .LessThanOrEqualTo(9999);

            RuleFor(x => x.XP)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(0)
                .LessThanOrEqualTo(9999);

            RuleFor(x => x.KeyItemID)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(-1);

            RuleFor(x => x.Fame)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(0)
                .LessThanOrEqualTo(999);

            RuleForEach(x => x.RewardItems)
                .SetValidator(new QuestRewardItemUIValidator());
        }
    }
}
