using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces.Repositories
{
    public interface INewsRepository : IGenericRepository<News>
    {
        Task<List<News>> GetListByPagginationAsync(int countProducts,
                int multiplierSkip, CancellationToken cancellationToken);
    }
}
