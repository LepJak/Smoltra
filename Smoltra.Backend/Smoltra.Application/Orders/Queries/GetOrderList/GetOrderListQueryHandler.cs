using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;

namespace Smoltra.Application.Orders.Queries.GetOrderList
{
    public class GetOrderListQueryHandler : IRequestHandler<GetOrderListQuery, AllOrderListVm>
    {
        public GetOrderListQueryHandler(IOrderRepository orderRepository,
            IMapper mapper)
            => (_orderRepository, _mapper)
            = (orderRepository, mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        public async Task<AllOrderListVm> Handle(GetOrderListQuery request, CancellationToken cancellationToken)
        {
            var orders = await _orderRepository
                .GetListAsync(cancellationToken);
            var result = _mapper.Map<List<OrderListItem>>(orders).OrderBy(x => x.State).ToList();
            return new AllOrderListVm { Orders = result };
        }
    }
}
