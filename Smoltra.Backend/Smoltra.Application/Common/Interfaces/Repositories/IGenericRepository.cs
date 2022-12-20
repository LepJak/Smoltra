using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface IGenericRepository<T>
        where T : BaseEntity
    {
        Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
        Task<Guid> AddAsync(T entity, CancellationToken cancellationToken);
        void Update(T entity);
        Task<int> GetCount();
        Task<IEnumerable<T>> GetListAsync(CancellationToken cancellationToken);
        Task<IEnumerable<T>> GetListByConditionAsync(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entity, CancellationToken cancellationToken);
        Task<bool> SaveChangesAsync(CancellationToken cancellationToken);
        Task AddRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken);
        Task<int> GetCount(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken);
    }
}
