using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.Queries.GetOrderDetails
{
    public class GetOrderDetailsQuery
        : IRequest<OrderDetailsVm>
    {
        public Guid UserId { get; set; }
        public Guid OrderId { get; set; }
    }
}
