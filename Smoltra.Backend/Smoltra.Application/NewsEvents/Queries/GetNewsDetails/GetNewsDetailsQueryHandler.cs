using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Queries.GetProductDetails;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsDetails
{
    public class GetNewsDetailsQueryHandler : 
        IRequestHandler<GetNewsDetailsQuery, NewsDetailsVm>
    {
        public GetNewsDetailsQueryHandler(INewsRepository repository, IMapper mapper) =>
            (_mapper, _repository) = (mapper, repository);

        private readonly IMapper _mapper;
        private readonly INewsRepository _repository;

        public async Task<NewsDetailsVm>
            Handle(GetNewsDetailsQuery request, CancellationToken cancellationToken)
        {
            var news = await _repository.GetByIdAsync(request.NewsId, cancellationToken);
            if (news == null)
            {
                throw new NotFoundException(nameof(News), request.NewsId);
            }
            var result = _mapper.Map<NewsDetailsVm>(news);
            return result;
        }
    }
}
