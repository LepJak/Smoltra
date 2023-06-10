using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsDetails
{
    public class GetNewsDetailsQuery : IRequest<NewsDetailsVm>
    {
        public Guid NewsId { get; set; }
    }
}
