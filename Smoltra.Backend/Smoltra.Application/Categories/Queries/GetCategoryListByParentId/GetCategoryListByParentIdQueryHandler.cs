using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Categories.Queries.GetCategoryListByParentId
{
    public class GetCategoryListByParentIdQueryHandler
        : IRequestHandler<GetCategoryListByParentIdQuery, CategoryListVm>
    {
        public GetCategoryListByParentIdQueryHandler(ICategoryRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly ICategoryRepository _repository;

        public async Task<CategoryListVm>
            Handle(GetCategoryListByParentIdQuery request, CancellationToken cancellationToken)
        {

            var categories = await _repository
                .GetListByConditionAsync
                (x => x.ParentCategoryId == request.ParentCategoryId,
                cancellationToken);
            
            var result = _mapper
                .Map<List<CategoryListItemDto>>(categories);

            return new CategoryListVm { Categories = result };
        }
    }
}
