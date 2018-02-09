using CZS.Web.Models.UI.QuestEditor;
using FluentValidation;

namespace CZS.Web.Models.Validation
{
    public class QuestRewardItemUIValidator: AbstractValidator<QuestRewardItemUI>
    {
        public QuestRewardItemUIValidator()
        {
            RuleFor(x => x.Resref)
                .NotNull()
                .NotEmpty()
                .MaximumLength(16)
                .MinimumLength(1);

            RuleFor(x => x.Quantity)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(1)
                .LessThanOrEqualTo(99);
        }
    }
}
