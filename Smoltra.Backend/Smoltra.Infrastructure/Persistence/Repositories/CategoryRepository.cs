using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(ISmoltraDbContext context) : base(context)
        {
            
        }
        public async Task<IEnumerable<Category>?> GetChildrenCategories(Guid id, 
            CancellationToken cancellationToken)
        {
            var category = await _context.Categories
                .FirstOrDefaultAsync(x => x.Id == id,cancellationToken);

            return category?.ChildrenCategories;
        }
    }
}
