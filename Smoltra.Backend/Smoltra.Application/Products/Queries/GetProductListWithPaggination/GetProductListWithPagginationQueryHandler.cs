using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    public class GetProductListWithPagginationQueryHandler
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
                .GetListByPagginationAsync(request.CountProducts,
                request.NumberPage, cancellationToken);

            var result = _mapper.Map<List<ProductItemDto>>(products);

            return new ProductListVm { Products =  result};
        }
    }
}
