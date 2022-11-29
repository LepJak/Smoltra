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
    }
}
