using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Orders.AddOrderItems;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.Queries.GetOrderDetails
{
    public class GetOrderDetailsQueryHandler
        : IRequestHandler<GetOrderDetailsQuery, OrderDetailsVm>
    {
        public GetOrderDetailsQueryHandler(IOrderRepository orderRepository,
            IMapper mapper
            )
            => (_orderRepository, _mapper)
            = (orderRepository, mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public async Task<OrderDetailsVm> Handle(GetOrderDetailsQuery request,
            CancellationToken cancellationToken)
        {
            var order = await _orderRepository.GetByIdAsync(request.OrderId, cancellationToken);
            if(order == null ) 
                throw new NotFoundException(nameof(Order), request.OrderId);

            var result = _mapper.Map<List<OrderProductItemDto>>(order.OrderItems);

            return new OrderDetailsVm
            {
                State = (int) order.State, 
                Created= order.Created,
                OrderId = order.Id,
                OrderItems = result
            };

        }
    }
}
