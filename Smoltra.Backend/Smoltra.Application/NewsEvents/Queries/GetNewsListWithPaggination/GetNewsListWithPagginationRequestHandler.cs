using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsListWithPaggination
{
    public class GetNewsListWithPagginationRequestHandler : IRequestHandler<GetNewsListWithPagginationQuery, NewsListVm>
    {
        public GetNewsListWithPagginationRequestHandler(INewsRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly INewsRepository _repository;

        public async Task<NewsListVm>
            Handle(GetNewsListWithPagginationQuery request, CancellationToken cancellationToken)
        {

            var products = await _repository
                .GetListByPagginationAsync(request.CountProducts,
                request.NumberPage, cancellationToken);

            var result = _mapper.Map<List<NewsLisItem>>(products);

            return new NewsListVm { News = result };
        }
    }
}
