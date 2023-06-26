using MediatR;


namespace Smoltra.Application.Orders.Queries.GetOrderList
{
    public class GetOrderListQuery : IRequest<AllOrderListVm>
    {
    }
}
