using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;

namespace Smoltra.Application.CartItems.Queries.GetCartItemList
{
    public class GetCartItemListQueryHandler
        : IRequestHandler<GetCartItemListQuery, CartItemListVm>
    {
        public GetCartItemListQueryHandler(ICartItemRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly ICartItemRepository _repository;

        public async Task<CartItemListVm>
            Handle(GetCartItemListQuery request, CancellationToken cancellationToken)
        {

            var cartItems = await _repository
                .GetListByConditionWithProductAsync(x => x.UserId == request.UserId, 
                cancellationToken);

            var result = _mapper.Map<List<CartListItem>>(cartItems);

            return new CartItemListVm { CartItems = result };
        }
    }
}
