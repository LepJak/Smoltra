using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Orders.AddOrderItems
{
    internal class AddOrderItemsCommandHandler
        : IRequestHandler<AddOrderItemsCommand, Guid>
    {
        public AddOrderItemsCommandHandler(IOrderRepository orderRepository, 
            IMapper mapper, ICartItemRepository cartRepository, IProductRepository productRepository
            )
            => (_orderRepository,_mapper, _cartRepository, _productRepository) 
            = (orderRepository, mapper, cartRepository, productRepository) ;

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        private readonly ICartItemRepository _cartRepository;
        private readonly IProductRepository _productRepository;

        public async Task<Guid> Handle(AddOrderItemsCommand request, 
            CancellationToken cancellationToken)
        {
            if (request.OrderItems.Count == 0)
                throw new ArgumentException("Products count equal to 0");
            var order = new Order
            {
                UserId = request.UserId,
                CreatedBy = request.UserId,
                Created = DateTime.Now,
                State = Domain.Enums.OrderState.WaitingAccept
            };
            var id = await _orderRepository.AddAsync(order, cancellationToken);
            foreach(var item in request.OrderItems)
            {
                var cartItem = await _cartRepository.GetByIdAsync(item.CartId, cancellationToken);
                if(cartItem != null)
                {                   
                    var product = cartItem.Product;
                    var totalPrice = (product?.Price ?? 0) * cartItem.Count;
                    order.OrderItems.Add(new OrderItem
                    {
                        Count = cartItem.Count,
                        ProductId = cartItem.ProductId,
                        PriceForUnit = product?.Price ?? 0,
                        Price = totalPrice

                    }); ;
                    _cartRepository.Remove(cartItem);
                }
                else
                {
                    throw new NotFoundException(nameof(CartItem), item.CartId);
                }
            }        
            await _orderRepository.SaveChangesAsync(cancellationToken);
           
            return id;
        }
    }
}
