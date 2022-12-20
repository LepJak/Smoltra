using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class ProductRepository 
        : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(ISmoltraDbContext context) : base(context)
        {
            
        }

        public async Task<List<Product>> 
            GetListByPagginationAsync(int countProducts, 
            int multiplierSkip, CancellationToken cancellationToken)
        {
            var products = await _context.Products
                    .Skip((multiplierSkip - 1) * countProducts)
                    .Take(countProducts)
                    .Include(p => p.Category)
                    .Include(p => p.GeneralImage)              
                    .AsNoTracking()
                    .ToListAsync(cancellationToken);
            return products;
        }
        public override async Task<Product?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            var result = await _context.Products               
                .Include(product => product.Category)
                .Include(product => product.ImageSet)
                .Include(p => p.ImageSet)
                .ThenInclude(set => set != null ? set.ProductImages : null)
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);

            return result;
        }
    }
}
