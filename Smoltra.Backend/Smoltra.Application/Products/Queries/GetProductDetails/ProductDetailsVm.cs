﻿using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Products.Queries.GetProductDetails
{
    public class ProductDetailsVm : IMapFrom<Product>
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public string? Category { get; set; }
        public Guid? GeneralImageId { get; set; }
        public List<Image> Images { get; set; } = new();
        public List<SpecificationGroupDto> SpecificationGroups { get; set; } = new();

        public class Image : IMapFrom<Smoltra.Domain.Entities.Image>
        {
            public Guid Id { get; set; }
            public void Mapping(Profile profile)
            {
                profile.CreateMap<Image, Smoltra.Domain.Entities.Image>()
                     .ForMember(p => p.Id, opt => opt.MapFrom(p => p.Id))
                     .ReverseMap()
                    ;                  
            }
        }
        public class SpecificationGroupDto : IMapFrom<ProductSpecificationGroup>
        {
            public string? Name { get; set; }
            //public string? Value { get; set; }
            public List<SpecificationDto> Specifications { get; set; } = new();
        }
        public class SpecificationDto : IMapFrom<ProductSpecification>
        {
            public string? Name { get; set; }
            public string? Value { get; set; }
            //public List<SpecificationValueDto> Values { get; set; } = new();
        }
        public class SpecificationValueDto : IMapFrom<SpecificationValue>
        {
            public string? Name { get; set; }
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Image, Smoltra.Domain.Entities.Image>();          
            profile.CreateMap<Product, ProductDetailsVm>()
                .ForMember(p => p.Images, opt => opt.MapFrom(p => p.Images))
                .ForMember(p => p.Category, opt => opt.MapFrom(p => p.Category != null ? p.Category.Name : null))
                .ForMember(p => p.SpecificationGroups, opt => opt.MapFrom(p => p.SpecificationGroups))
                .ForMember(p => p.GeneralImageId, opt => opt.MapFrom(p => p.GeneralImageForProduct.ImageId));
            profile.CreateMap<ProductSpecificationGroup, SpecificationGroupDto>()
                .ForMember(p => p.Name, opt => opt.MapFrom(p => p.Title))
                .ForMember(p => p.Specifications, opt => opt.MapFrom(p => p.ProductSpecifications));
                //.ForMember(p => p.Specifications, opt => opt.MapFrom(p => p.ProductSpecifications));
            profile.CreateMap<ProductSpecification, SpecificationDto>()
                .ForMember(p => p.Name, opt => opt.MapFrom(p => p.Name))
                .ForMember(p => p.Value, opt => opt.MapFrom(p => p.Value)).ReverseMap();
            //.ForMember(p => p.Values, opt => opt.MapFrom(p => p.SpecificationValues));

            //profile.CreateMap<SpecificationValue, SpecificationValueDto>()
            //    .ForMember(p => p.Name, opt => opt
            //    .MapFrom(p => p.ProductSpecification != null && p.ProductSpecification.UnitsOfMeasurement != null
            //    ? $"{p.Name} {p.ProductSpecification.UnitsOfMeasurement.ShortName}"
            //    : $"{p.Name}"));
        }

    }    

}