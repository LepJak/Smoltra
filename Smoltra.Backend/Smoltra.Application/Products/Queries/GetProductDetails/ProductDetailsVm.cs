using AutoMapper;
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

        public class Image : IMapFrom<ProductImage>
        {
            public Guid Id { get; set; }
            public void Mapping(Profile profile)
            {
                profile.CreateMap<ProductImage, Image>();                  
            }
        }

        public void Mapping(Profile profile)
        {
            
            profile.CreateMap<Product, ProductDetailsVm>()
                .ForMember(p => p.Images, opt => opt.MapFrom(p => p.ImageSet.ProductImages))
                .ForMember(p => p.Category, opt => opt.MapFrom(p => p.Category != null ? p.Category.Name : null));
        }

    }    

}