using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using System.Linq.Expressions;


namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class GenericRepository<T> :
        IGenericRepository<T> where T : class
    {
        public GenericRepository(ISmoltraDbContext context)
            => _context = context;

        protected readonly ISmoltraDbContext _context;

        public async Task AddAsync(T entity, CancellationToken cancellationToken)
            => await _context.Set<T>().AddAsync(entity, cancellationToken);

        public async Task<IEnumerable<T>> GetListAsync(CancellationToken cancellationToken)
            => await _context.Set<T>().AsNoTracking().ToListAsync(cancellationToken);

        public async Task<IEnumerable<T>> GetListByConditionAsync(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken)
            => await _context.Set<T>().AsNoTracking().Where(predicate).ToListAsync(cancellationToken);

        public async Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
            => await _context.Set<T>().FindAsync(new object[] { id }, cancellationToken);

        public void Remove(T entity)
            => _context.Set<T>().Remove(entity);

        public void Update(T entity)
            => _context.Set<T>().Update(entity);
        public async Task<int> GetCount()
            => await _context.Set<T>().CountAsync();
        
        public async Task AddRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken)
            => await _context.Set<T>().AddRangeAsync(entities, cancellationToken);

        public async Task<bool> SaveChangesAsync(CancellationToken cancellationToken)
            => await _context.SaveChangesAsync(cancellationToken) > 0;
    }
}
