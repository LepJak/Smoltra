using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System.Threading;

namespace Smoltra.Application.Categories.Queries.GetCategoryListWithChildCategories
{
    public class GetCategoryListWithChildsCategoriesQueryHandler 
        : IRequestHandler<GetCategoryListWithChildCategoriesQuery, CategoryListWithChildCategoriesVm>
    {
        public GetCategoryListWithChildsCategoriesQueryHandler(ICategoryRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly ICategoryRepository _repository;
        

        public async Task<CategoryListWithChildCategoriesVm>
            Handle(GetCategoryListWithChildCategoriesQuery request, CancellationToken cancellationToken)
        {
            //TODO : придумать более лаконичный способ
           
            var categories = await _repository
                .GetListByConditionAsync(x => x.ParentCategory == null
                ,cancellationToken);           
            
            var result = _mapper.Map<List<CategoryWithChildCategoriesListItemDto>>(categories);

            var queue = new Queue<CategoryWithChildCategoriesListItemDto>();
            result.ForEach(x=> queue.Enqueue(x));
            

            while(queue.Count > 0)
            {
                var elem = queue.Dequeue();
                var children = await _repository
                    .GetChildrenCategories(elem.Id, cancellationToken);
                var cat = _mapper.Map<List<CategoryWithChildCategoriesListItemDto>>(children);
                cat.ForEach(x => queue.Enqueue(x));
                elem.Childs = cat;
            }


            return new CategoryListWithChildCategoriesVm { Categories = result };
        }      
    }
}
