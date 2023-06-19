using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System.Linq.Expressions;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
        public OrderRepository(ISmoltraDbContext context) : base(context)
        {
        }

        public override async Task<Order?>
            GetByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            return await _context.Orders
                .Include(x => x.OrderItems)
                .ThenInclude(x => x.Product)
                .ThenInclude(x => x.GeneralImageForProduct)
                .FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<List<Order>> 
            GetListByConditionAsyncWithOrdersItem(
            Expression<Func<Order, bool>> predicate, CancellationToken cancellationToken)
        {
            return await _context.Orders
                .Include(x => x.OrderItems)
                .ThenInclude(x => x.Product)                
                .Where(predicate)
                
                .ToListAsync(cancellationToken);
        }
    }
}
