using MediatR;
using Newtonsoft.Json;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Commands.CreateProduct;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Products.Commands.UpdateProduct
{
    public class UpdateProductCommandHandler
        : IRequestHandler<UpdateProductCommand, Unit>
    {
        public UpdateProductCommandHandler(IProductRepository productRepository,
            ICategoryRepository categoryRepository, IFileService fileService, IImageRepository imageRepository
            , ISpecificationRepository specificationRepository, ISpecificationGroupRepository specificationGroupRepository) =>
            (_productRepository, _categoryRepository, _fileService,
            _imageRepository, _specificationRepository, _specificationGroupRepository)
            = (productRepository, categoryRepository, fileService, imageRepository,
            specificationRepository, specificationGroupRepository);

        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IImageRepository _imageRepository;
        private readonly ISpecificationGroupRepository _specificationGroupRepository;
        private readonly ISpecificationRepository _specificationRepository;
        private readonly IFileService _fileService;

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

            bool defaultImage = true;
            foreach (var image in request.NewImages)
            {
                var imageId = await _imageRepository.AddAsync(new Image { ProductId = product.Id }, cancellationToken);
                _fileService.SaveProductImage(imageId, image);
                if (defaultImage == true)
                {
                    product.GeneralImageId = imageId;
                    defaultImage = false;
                }
            }
            var genIm = product.Images?.FirstOrDefault();

            foreach(var deletedImageId in request.DeletedImageIds)
            {
                var image = await _imageRepository.GetByIdAsync(deletedImageId, cancellationToken);
                if (image != null)
                {
                    _imageRepository.Remove(image);
                    _fileService.DeleteProductImage(deletedImageId);
                }
                    

            }
            if (genIm != null)
            {
                product.GeneralImage = genIm;
            }

            foreach (var specificationGroup in product.SpecificationGroups)
            {
                foreach(var specification in specificationGroup.ProductSpecifications)
                {
                    _specificationRepository.Remove(specification);
                }
                _specificationGroupRepository.Remove(specificationGroup);               
            }

            try
            {
                if (request.SpecificationGroups != null)
                {
                    var specificationGroups = JsonConvert.DeserializeObject<List<SpecificatinGroupDto>>(request.SpecificationGroups);
                    foreach (var specGroup in specificationGroups)
                    {
                        var specGroupId = await _specificationGroupRepository
                            .AddAsync(new ProductSpecificationGroup { ProductId = product.Id, Title = specGroup.Name }, cancellationToken);
                        foreach (var spec in specGroup.Specifications)
                        {
                            await _specificationRepository
                           .AddAsync(new ProductSpecification { ProductSpecificationGroupId = specGroupId, Name = spec.Name }, cancellationToken);
                        }
                    }
                }

            }
            catch
            {

            }
            await _productRepository.SaveChangesAsync(cancellationToken);




            return Unit.Value;
        }
    }
}
