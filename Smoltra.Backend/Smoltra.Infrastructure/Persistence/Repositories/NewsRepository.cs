using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class NewsRepository : GenericRepository<News>
    {
        public NewsRepository(ISmoltraDbContext context) : base(context)
        {

        }

        public async Task<List<News>>
            GetListByPagginationAsync(int countProducts,
            int multiplierSkip, CancellationToken cancellationToken)
        {
            var news = await _context.News
                    .Skip((multiplierSkip - 1) * countProducts)
                    .Take(countProducts)
                    .AsNoTracking()
                    .ToListAsync(cancellationToken);
            return news;
        }
    }
}
