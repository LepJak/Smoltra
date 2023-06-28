using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    internal class CartItemRepository : GenericRepository<CartItem>, ICartItemRepository
    {
        public CartItemRepository(ISmoltraDbContext context) : base(context)
        { }

        public override async Task<CartItem> GetByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            return await _context.CartItems
                .Include(p => p.Product)               
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
        }
        public async Task<IEnumerable<CartItem>> 
            GetListByConditionWithProductAsync(Expression<Func<CartItem, bool>> predicate, 
            CancellationToken cancellationToken)
        {
            return await _context.CartItems
                .Include(x => x.Product)
                .ThenInclude(x => x.GeneralImageForProduct)
                .AsNoTracking()
                .Where(predicate).
                ToListAsync(cancellationToken);
        }

    }
}
