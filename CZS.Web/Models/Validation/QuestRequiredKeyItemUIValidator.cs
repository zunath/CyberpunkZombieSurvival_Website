using CZS.Web.Models.UI.QuestEditor;
using FluentValidation;

namespace CZS.Web.Models.Validation
{
    public class QuestRequiredKeyItemUIValidator: AbstractValidator<QuestRequiredKeyItemUI>
    {
        public QuestRequiredKeyItemUIValidator()
        {
            RuleFor(x => x.RequiredKeyItemID)
                .NotNull()
                .NotEmpty()
                .GreaterThanOrEqualTo(-1);
        }
    }
}
