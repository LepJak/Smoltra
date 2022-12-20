using MediatR;

namespace Smoltra.Application.Orders.Queries.GetListOrderByUserId
{
    public class GetListOrderByUserIdQuery : IRequest<OrderListVm>
    {
        public Guid UserId { get; set; }
    }
}
