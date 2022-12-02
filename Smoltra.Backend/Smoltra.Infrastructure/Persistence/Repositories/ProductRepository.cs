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
                    .ToListAsync(cancellationToken);
            return products;
        }
    }
}
