using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Commands.CreateProduct;

namespace Smoltra.WebAPI.Models
{
    public class CreateProductDto : IMapFrom<CreateProductCommand>
    {
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public Guid CategoryId { get; set; }
        public List<IFormFile> Images { get; set; } = new List<IFormFile>();
        public void Mapping(Profile profile)
        {
            profile.CreateMap<CreateProductDto, CreateProductCommand>(); ;
        }
    }
}
