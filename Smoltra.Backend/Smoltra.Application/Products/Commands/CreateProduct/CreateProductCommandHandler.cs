using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Interfaces;
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
            ICategoryRepository categoryRepository, IFileService fileService, IImageRepository imageRepository) =>
            (_productRepository, _categoryRepository, _fileService, _imageRepository) 
            = (productRepository, categoryRepository, fileService, imageRepository);

        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IFileService _fileService;
        public async Task<Guid> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            //var category = await _categoryRepository.GetByIdAsync(request.CategoryId,
            //    cancellationToken);
            var product = new Product
            {
                Name = request.Name,
                Description = request.Description,
                Price = request.Price,
                CreatedBy= request.UserId,
                Created = DateTime.Now             
            };

            var id = await _productRepository.AddAsync(product, cancellationToken);

            foreach (var image in request.Images)
            {
                var imageId = await _imageRepository.AddAsync(new Image { ProductId = id }, cancellationToken);
                _fileService.SaveProductImage(imageId, image);
            }

            
            await _productRepository.SaveChangesAsync(cancellationToken);
            return id;
        }
    }
}
