using MediatR;
using Newtonsoft.Json;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Commands.CreateNews
{
    public class CreateNewsCommandHandler :     
     IRequestHandler<CreateNewsCommand, Guid>
    {
        public CreateNewsCommandHandler(INewsRepository newsRepository) =>
            (_newsRepository) = (newsRepository);

        private readonly INewsRepository _newsRepository;

        public async Task<Guid> Handle(CreateNewsCommand request, CancellationToken cancellationToken)
        {

            var news = new News
            {
                Title = request.Title,
                Content = request.Content,
                CreatedBy = request.UserId,
                Created = DateTime.Now,
                Annotation = request.Annotation,
            };
            var id = await _newsRepository.AddAsync(news, cancellationToken);


            await _newsRepository.SaveChangesAsync(cancellationToken);
            return id;
        }
    }
}
