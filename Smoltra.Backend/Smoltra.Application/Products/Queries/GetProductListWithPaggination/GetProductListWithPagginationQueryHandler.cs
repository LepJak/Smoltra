using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using System.Linq;

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
                .GetListByPagginationAsync(50,
                request.NumberPage, request.SearchingString, cancellationToken);

            var result = _mapper.Map<List<ProductItemDto>>(products);
            var searchingString = request.SearchingString.Replace("'", "");
            var newResult = new List<ProductItemDto>();
            if (!string.IsNullOrEmpty(searchingString))
            {
                foreach (var item in result)
                {
                    var normName = item.Name.ToLower();
                    var normSearch = searchingString.ToLower();
                    if (normName.Contains(normSearch))
                        newResult.Add(item);
                }
            }
            else
            {
                newResult = result;
            }
                


            return new ProductListVm { Products = newResult };
        }
    }
}
