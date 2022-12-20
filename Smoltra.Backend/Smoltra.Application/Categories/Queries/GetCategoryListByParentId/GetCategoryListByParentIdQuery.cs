using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Categories.Queries.GetCategoryListByParentId
{
    public class GetCategoryListByParentIdQuery
        : IRequest<CategoryListVm>
    {
        public Guid ParentCategoryId { get; set; }
    }
}
