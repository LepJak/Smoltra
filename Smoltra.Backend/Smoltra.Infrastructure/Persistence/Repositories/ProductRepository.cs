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
                    .Include(p => p.GeneralImageForProduct)              
                    .AsNoTracking()
                    .ToListAsync(cancellationToken);
            return products;
        }
        public override async Task<Product?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            var result = await _context.Products
                .Include(p => p.GeneralImageForProduct)
                .Include(product => product.Category)
                .Include(product => product.SpecificationGroups)
                .ThenInclude(specificationGroup => specificationGroup != null ? specificationGroup.ProductSpecifications : null)
                .Include(product => product.SpecificationGroups)
                .ThenInclude(specificationGroup => specificationGroup.ProductSpecifications)
                .ThenInclude(specification => specification.UnitsOfMeasurement)
                .Include(product => product.Images)
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);

            return result;
        }
    }
}
