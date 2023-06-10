using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;


namespace Smoltra.Application.NewsEvents.Commands.DeleteNews
{
    public class DeleteNewsCommandHandler : IRequestHandler<DeleteNewsCommand, Unit>
    {
        public DeleteNewsCommandHandler(INewsRepository newsRepository) =>
            (_newsRepository) = (newsRepository);

        private readonly INewsRepository _newsRepository;
        public async Task<Unit> Handle(DeleteNewsCommand request, CancellationToken cancellationToken)
        {
            var product = await _newsRepository.GetByIdAsync(request.NewsId,
                cancellationToken);
            if (product == null)
                throw new NotFoundException(nameof(News), request.NewsId);
            _newsRepository.Remove(product);

            await _newsRepository.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
