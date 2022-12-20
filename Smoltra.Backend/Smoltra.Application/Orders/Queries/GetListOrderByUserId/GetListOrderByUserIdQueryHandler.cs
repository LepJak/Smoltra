using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.Queries.GetListOrderByUserId
{
    public class GetListOrderByUserIdQueryHandler
        : IRequestHandler<GetListOrderByUserIdQuery, OrderListVm>
    {
        public GetListOrderByUserIdQueryHandler(IOrderRepository orderRepository,
            IMapper mapper )
            => (_orderRepository, _mapper)
            = (orderRepository,  mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        public async Task<OrderListVm> Handle(GetListOrderByUserIdQuery request, CancellationToken cancellationToken)
        {
            var orders = await _orderRepository
                .GetListByConditionAsyncWithOrdersItem(x => x.UserId == request.UserId, 
                cancellationToken);
            var result = _mapper.Map<List<OrderListItemDto>>(orders);
            return new OrderListVm { Orders = result };
        }
    }
}
