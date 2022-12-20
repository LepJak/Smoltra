using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Categories.Queries.GetCategoryListWithChildCategories
{
    public class CategoryListWithChildCategoriesVm
    {
        public List<CategoryWithChildCategoriesListItemDto> Categories { get; set; }
            = new();
    }
    public class CategoryWithChildCategoriesListItemDto : IMapFrom<Category>
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public List<CategoryWithChildCategoriesListItemDto>? Childs { get; set; }  
    }
}
