using MediatR;
using Smoltra.Application.Categories.Commands.CreateCategory;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Smoltra.Application.Categories.Commands.DeleteCategory
{
    public class DeleteCategoryCommandHandler
        : IRequestHandler<DeleteCategoryCommand, Unit>
    {
        public DeleteCategoryCommandHandler(ICategoryRepository repository) =>
            (_repository) = (repository);

        private readonly ICategoryRepository _repository;


        public async Task<Unit>
            Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _repository.
                GetByIdAsync(request.CategoryId, cancellationToken);
            if (category == null)
                throw new NotFoundException(nameof(Category), request.CategoryId);

            if (request.DeleteChildCategories)
            {
                var categories = await GetAllChildsCategory(category, cancellationToken);
                _repository.RemoveRange(categories, cancellationToken);
            }
                       
            return Unit.Value;
        }

        public async Task<IEnumerable<Category>> 
            GetAllChildsCategory(Category startCategory, 
            CancellationToken cancellationToken)
        {
            Queue<Category> queue = new();
            List<Category> list = new();
            queue.Enqueue(startCategory);
            while (queue.Count > 0)
            {
                var curCategory = queue.Dequeue();
                list.Add(curCategory);
                var child = await _repository
                    .GetChildrenCategories(curCategory.Id,
                    cancellationToken);
                if (child != null)
                    foreach (var item in child)
                    {
                        queue.Enqueue(item);
                    }
            }
            return list;
        }
    }
}
