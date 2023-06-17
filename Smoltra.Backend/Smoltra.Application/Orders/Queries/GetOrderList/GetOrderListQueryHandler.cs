using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;

namespace Smoltra.Application.Orders.Queries.GetOrderList
{
    public class GetOrderListQueryHandler : IRequestHandler<GetOrderListQuery, OrderListVm>
    {
        public GetOrderListQueryHandler(IOrderRepository orderRepository,
            IMapper mapper)
            => (_orderRepository, _mapper)
            = (orderRepository, mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        public async Task<OrderListVm> Handle(GetOrderListQuery request, CancellationToken cancellationToken)
        {
            var orders = await _orderRepository
                .GetListAsync(cancellationToken);
            var result = _mapper.Map<List<OrderListItem>>(orders);
            return new OrderListVm { Orders = result };
        }
    }
}
