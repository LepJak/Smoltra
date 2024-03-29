﻿using AutoMapper;
using MediatR;
using Newtonsoft.Json;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Commands.CreateProduct
{
    internal class CreateProductCommandHandler
        : IRequestHandler<CreateProductCommand, Guid>
    {
        public CreateProductCommandHandler(IProductRepository productRepository, 
            ICategoryRepository categoryRepository, IFileService fileService, IImageRepository imageRepository
            , ISpecificationRepository specificationRepository, ISpecificationGroupRepository specificationGroupRepository) =>
            (_productRepository, _categoryRepository, _fileService, 
            _imageRepository, _specificationRepository,_specificationGroupRepository) 
            = (productRepository, categoryRepository, fileService, imageRepository, 
            specificationRepository,specificationGroupRepository);

        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IImageRepository _imageRepository;
        private readonly ISpecificationGroupRepository _specificationGroupRepository;
        private readonly ISpecificationRepository _specificationRepository;
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
            product.Images = new List<Image>();
            bool defaultImage = true;
            foreach (var image in request.Images)
            {
                var dbImage = new Image();
                var guid = await _imageRepository.AddAsync(dbImage, cancellationToken);
                product.Images.Add(dbImage);                 
                _fileService.SaveProductImage(dbImage.Id, image);
                if (defaultImage == true)
                {
                    product.GeneralImageForProduct = new GeneralImageForProduct { ImageId = dbImage.Id };
                    defaultImage = false;
                }
                
            }
            await _productRepository.SaveChangesAsync(cancellationToken);

            try
            {
                if(request.SpecificationGroups != null)
                {
                    var specificationGroups = JsonConvert.DeserializeObject<List<SpecificatinGroupDto>>(request.SpecificationGroups);
                    foreach (var specGroup in specificationGroups)
                    {
                        var specGroupId = await _specificationGroupRepository
                            .AddAsync(new ProductSpecificationGroup { ProductId = id, Title = specGroup.Name }, cancellationToken);
                        foreach (var spec in specGroup.Specifications)
                        {
                            await _specificationRepository
                           .AddAsync(new ProductSpecification { ProductSpecificationGroupId = specGroupId, Name = spec.Name, Value = spec.Value }, cancellationToken);
                        }
                    }
                }
                    
            }
            catch
            {

            }
            
            
            await _productRepository.SaveChangesAsync(cancellationToken);
            return id;
        }
    }
}
