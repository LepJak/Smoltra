using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface IOrderRepository : IGenericRepository<Order>
    {
        Task<List<Order>> GetListByConditionAsyncWithOrdersItem(Expression<Func<Order, bool>> predicate, CancellationToken cancellationToken);
    }
}
