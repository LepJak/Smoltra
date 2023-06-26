using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Orders.Queries.GetOrderDetails;
using Smoltra.Domain.Entities;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.ChangeOrderState
{
    internal class ChangeOrderStateCommandHandler : IRequestHandler<ChangeOrderStateCommand, Unit>
    {
        public ChangeOrderStateCommandHandler(IOrderRepository orderRepository,
            IMapper mapper
            )
            => (_orderRepository, _mapper)
            = (orderRepository, mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public async Task<Unit> Handle(ChangeOrderStateCommand request,
            CancellationToken cancellationToken)
        {
            var order = await _orderRepository.GetByIdAsync(request.OrderId, cancellationToken);
            if(order == null)
                throw new NotFoundException(nameof(Order), request.OrderId);

            order.State = (OrderState)request.NewState;
            await _orderRepository.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
