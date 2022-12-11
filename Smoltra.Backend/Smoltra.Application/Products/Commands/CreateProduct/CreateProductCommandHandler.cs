using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Commands.CreateProduct
{
    internal class CreateProductCommandHandler
        : IRequestHandler<CreateProductCommand, Guid>
    {
        public CreateProductCommandHandler(IProductRepository productRepository, 
            ICategoryRepository categoryRepository) =>
            (_productRepository, _categoryRepository) = (productRepository, categoryRepository);

        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        public async Task<Guid> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId,
                cancellationToken);
            var product = new Product
            {
                Name = request.Name,
                Description = request.Description,
                Price = request.Price,
                CreatedBy= request.UserId,
                Created = DateTime.Now,
                Category = category               
            };
            var id = await _productRepository.AddAsync(product, cancellationToken);
            await _productRepository.SaveChangesAsync(cancellationToken);
            return id;
        }
    }
}
