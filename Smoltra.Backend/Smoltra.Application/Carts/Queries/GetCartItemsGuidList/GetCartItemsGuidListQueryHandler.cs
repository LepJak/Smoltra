using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Carts.Queries.GetCartItemsGuidList
{
    public class GetCartItemsGuidListQueryHandler
        : IRequestHandler<GetCartItemsGuidListQuery, CatItemsGuidListVm>
    {
        public GetCartItemsGuidListQueryHandler(ICartItemRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly ICartItemRepository _repository;

        public async Task<CatItemsGuidListVm>
            Handle(GetCartItemsGuidListQuery request, CancellationToken cancellationToken)
        {

            var cartItems = await _repository
                .GetListByConditionWithProductAsync(x => x.UserId == request.UserId,
                cancellationToken);
            var result = cartItems.Select(x => x.ProductId).ToList();           
            return new CatItemsGuidListVm { ItemsGuidList = result };
        }
    }
}
