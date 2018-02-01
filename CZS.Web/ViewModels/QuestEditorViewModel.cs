using CZS.Web.Attributes;
using CZS.Web.Constants;
using DotNetify;

namespace CZS.Web.ViewModels
{
    [RoleRequired(RoleType.Admin)]
    public class QuestEditorViewModel: BaseVM
    {

    }
}
