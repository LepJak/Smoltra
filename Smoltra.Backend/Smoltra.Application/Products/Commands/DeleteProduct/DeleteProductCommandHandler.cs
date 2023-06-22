using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Products.Commands.DeleteProduct
{
    public class DeleteProductCommandHandler
        : IRequestHandler<DeleteProductCommand, Unit>
    {
        public DeleteProductCommandHandler(IProductRepository productRepository) =>
            (_productRepository) = (productRepository);

        private readonly IProductRepository _productRepository;
        public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(request.ProductId,
                cancellationToken);
            if (product == null)
                throw new NotFoundException(nameof(Product), request.ProductId);
            //_productRepository.Remove(product);
            product.IsDeleted = true;
            
            await _productRepository.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
