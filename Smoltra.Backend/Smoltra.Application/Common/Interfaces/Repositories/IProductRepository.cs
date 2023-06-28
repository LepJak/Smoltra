using Smoltra.Domain.Entities;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface IProductRepository : IGenericRepository<Product>
    {
        Task<List<Product>> GetListByPagginationAsync(int countProducts,
                int multiplierSkip, string searchingString, CancellationToken cancellationToken);
    }
}
