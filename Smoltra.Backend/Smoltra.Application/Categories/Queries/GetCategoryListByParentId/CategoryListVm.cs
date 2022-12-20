using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Categories.Queries.GetCategoryListByParentId
{
    public class CategoryListVm
    {
        public List<CategoryListItemDto> Categories { get; set; }
                = new();
    }
    public class CategoryListItemDto : IMapFrom<Category>
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
    }
}
