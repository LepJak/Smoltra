using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Products.Commands.UpdateProduct
{
    public class UpdateProductCommandHandler
        : IRequestHandler<UpdateProductCommand, Unit>
    {
        public UpdateProductCommandHandler(IProductRepository productRepository,
             ICategoryRepository categoryRepository) =>
             (_productRepository, _categoryRepository) = (productRepository, categoryRepository);

        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        
        public async Task<Unit> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(request.ProductId, cancellationToken);
            if (product == null)
                throw new NotFoundException(nameof(Product), request.ProductId);
            
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId, cancellationToken); 
            product.Name = request.Name;
            product.Description = request.Description;
            product.Price =request.Price;
            product.LastModifiedBy = request.UserId;
            product.LastModified = DateTime.Now;
            product.Category= category;
            _productRepository.Update(product);
            await _productRepository.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
