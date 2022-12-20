using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.CartItems.Command.AddProductToCart
{
    public class CreateCartItemCommandHandler
        : IRequestHandler<AddProductToCartCommand, Guid>
    {
        public CreateCartItemCommandHandler(ICartItemRepository repository) =>
            (_repository) = (repository);

        private readonly ICartItemRepository _repository;

        public async Task<Guid> Handle(AddProductToCartCommand request, CancellationToken cancellationToken)
        {
            var items = await _repository
                .GetListByConditionAsync(x =>
                x.UserId == request.UserId
                && x.ProductId == request.ProductId,
                cancellationToken);
            var id = items.FirstOrDefault()?.Id;
            if (id != null)
            {
                var item = await _repository.GetByIdAsync(id.Value, cancellationToken);
                if (item != null)
                {
                    item.Count += request.Count;
                    await _repository.SaveChangesAsync(cancellationToken);
                    return item.Id;
                }
            }
                
            //TODO: add cart service
            var cartItem = new CartItem
            {
                UserId = request.UserId,
                ProductId = request.ProductId,
                Count = request.Count
            };
            var result = await _repository.AddAsync(cartItem, cancellationToken);
            await _repository.SaveChangesAsync(cancellationToken);
            return result;
        }
    }
}
