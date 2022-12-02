using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    public class GetProductListWithPagginationQuery : IRequest<ProductListVm>
    {
        public int NumberPage { get; set; }
        public int CountProducts { get; set; }
    }
}
