using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductDetails
{
    public class GetProductDetailsQueryHandler
        : IRequestHandler<GetProductDetailsQuery, ProductDetailsVm>
    {
        public GetProductDetailsQueryHandler(IProductRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly IProductRepository _repository;

        public async Task<ProductDetailsVm> 
            Handle(GetProductDetailsQuery request, CancellationToken cancellationToken)
        {
            var product = await _repository.GetByIdAsync(request.ProductId, cancellationToken);
            if (product == null)
            {
                 throw new NotFoundException(nameof(Product), request.ProductId);
            }
            var result = _mapper.Map<ProductDetailsVm>(product);
            return result;
        }
    }
}
