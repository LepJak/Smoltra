using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Common;
using System.Linq.Expressions;


namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class GenericRepository<T> :
        IGenericRepository<T> where T : BaseEntity
    {
        public GenericRepository(ISmoltraDbContext context)
            => _context = context;

        protected readonly ISmoltraDbContext _context;

        public virtual async Task<Guid> AddAsync(T entity, CancellationToken cancellationToken)
        {
            var result = await _context.Set<T>().AddAsync(entity, cancellationToken);
            return result.Entity.Id;
        }
            

        public virtual async Task<IEnumerable<T>> GetListAsync(CancellationToken cancellationToken)
            => await _context.Set<T>().AsNoTracking().ToListAsync(cancellationToken);

        public virtual async Task<IEnumerable<T>> GetListByConditionAsync(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken)
            => await _context.Set<T>().AsNoTracking().Where(predicate).ToListAsync(cancellationToken);

        public virtual async Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
            => await _context.Set<T>().FindAsync(new object[] { id }, cancellationToken);

        public virtual void Remove(T entity)
            => _context.Set<T>().Remove(entity);

        public virtual void Update(T entity)
            => _context.Set<T>().Update(entity);
        public virtual async Task<int> GetCount()
            => await _context.Set<T>().CountAsync();
        
        public virtual async Task AddRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken)
            => await _context.Set<T>().AddRangeAsync(entities, cancellationToken);

        public virtual async Task<bool> SaveChangesAsync(CancellationToken cancellationToken)
            => await _context.SaveChangesAsync(cancellationToken) > 0;
    }
}
