using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    internal class GetProductListWithPagginationQueryHandler
        : IRequestHandler<GetProductListWithPagginationQuery, ProductListVm>
    {
        public GetProductListWithPagginationQueryHandler(IProductRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly IProductRepository _repository;

        public async Task<ProductListVm> 
            Handle(GetProductListWithPagginationQuery request, CancellationToken cancellationToken)
        {
            var products = await _repository
                .Get(request.CountProducts,
                request.NumberPage, cancellationToken);

            var result = _mapper.Map<List<ProductListItemDto>>(products);

            return new ProductListVm { Products = result };
        }
    }
}
