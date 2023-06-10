using MediatR;
using Newtonsoft.Json;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Common.Interfaces;

using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Commands.UpdateNews
{
    public class UpdateNewsCommandHandler : IRequestHandler<UpdateNewsCommand, Unit>
    {
        public UpdateNewsCommandHandler(INewsRepository newsRepository) =>
            (_newsRepository) = (newsRepository);

        private readonly INewsRepository _newsRepository;

        public async Task<Unit> Handle(UpdateNewsCommand request, CancellationToken cancellationToken)
        {
            var news = await _newsRepository.GetByIdAsync(request.NewsId, cancellationToken);
            if (news == null)
                throw new NotFoundException(nameof(News), request.NewsId);

            news.LastModifiedBy = request.UserId;
            news.LastModified = DateTime.Now;
            news.Content = request.Content;
            news.Title = request.Title;


            await _newsRepository.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
