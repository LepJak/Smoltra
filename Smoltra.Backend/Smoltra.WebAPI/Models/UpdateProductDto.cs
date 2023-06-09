using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Commands.CreateProduct;
using Smoltra.Application.Products.Commands.UpdateProduct;
using static Smoltra.Application.Products.Queries.GetProductDetails.ProductDetailsVm;

namespace Smoltra.WebAPI.Models
{
    public class UpdateProductDto : IMapFrom<UpdateProductCommand>
    {
        public Guid ProductId { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
       // public Guid CategoryId { get; set; }
        public List<Guid> DeletedImageIds { get; set; } = new List<Guid>();
        public List<IFormFile> NewImages { get; set; } = new List<IFormFile>();
        public string? SpecificationGroups { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateProductDto, UpdateProductCommand>(); ;
        }
    }
}
