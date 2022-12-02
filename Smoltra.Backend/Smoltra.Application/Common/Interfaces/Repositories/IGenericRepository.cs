using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface IGenericRepository<T>
        where T : class
    {
        Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
        Task AddAsync(T entity, CancellationToken cancellationToken);
        void Update(T entity);
        Task<int> GetCount()
        Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken);
        Task<IEnumerable<T>> GetAllAsyncByCondition(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken);
        void Remove(T entity);
        Task<bool> SaveChangesAsync(CancellationToken cancellationToken);
        Task AddRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken);
    }
}
