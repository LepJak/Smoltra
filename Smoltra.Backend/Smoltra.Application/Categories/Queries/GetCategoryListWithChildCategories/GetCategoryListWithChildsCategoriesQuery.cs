using MediatR;

namespace Smoltra.Application.Categories.Queries.GetCategoryListWithChildCategories
{
    public class GetCategoryListWithChildCategoriesQuery 
        : IRequest<CategoryListWithChildCategoriesVm>
    {
    }
}
