using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsListWithPaggination
{
    public class GetNewsListWithPagginationQuery : IRequest<NewsListVm>
    {
        public int NumberPage { get; set; }
        public int CountProducts { get; set; }
    }
}
