using MediatR;
using Smoltra.Application.CartItems.Command.DeleteCartItem;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.CartItems.Command.UpdateCartItem
{
    internal class UpdateCartItemCommandHandler
        : IRequestHandler<UpdateCartItemCommand, Unit>
    {
        public UpdateCartItemCommandHandler(ICartItemRepository repository) =>
            (_repository) = (repository);

        private readonly ICartItemRepository _repository;


        public async Task<Unit> Handle(UpdateCartItemCommand request, CancellationToken cancellationToken)
        {
            var cartItem = await _repository.
                GetByIdAsync(request.CartItemId, cancellationToken);

            if (cartItem == null || cartItem.UserId != request.UserId)
                throw new NotFoundException(nameof(CartItem), request.CartItemId);
            
            cartItem.Count = request.Count;
            _repository.Update(cartItem);
            await _repository.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
