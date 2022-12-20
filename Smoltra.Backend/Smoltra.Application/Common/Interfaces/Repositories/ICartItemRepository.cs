using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface ICartItemRepository : IGenericRepository<CartItem>
    {
        Task<IEnumerable<CartItem>>
            GetListByConditionWithProductAsync
            (Expression<Func<CartItem, bool>> predicate,
            CancellationToken cancellationToken);
    }
}
