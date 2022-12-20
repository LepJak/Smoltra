using AutoMapper;
using MediatR;
using Smoltra.Application.Categories.Queries.GetCategoryListWithChildCategories;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Categories.Commands.CreateCategory
{
    public class CreateCategoryCommandHandler 
        : IRequestHandler<CreateCategoryCommand, Guid>
    {
        public CreateCategoryCommandHandler(ICategoryRepository repository) =>
            (_repository) = (repository);

        private readonly ICategoryRepository _repository;


        public async Task<Guid>
            Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = new Category
            {
                Name = request.Name,
                ParentCategoryId = request.ParentId
            };
            var id = await _repository.AddAsync(category, cancellationToken);

            return id;
        }
    }
}
