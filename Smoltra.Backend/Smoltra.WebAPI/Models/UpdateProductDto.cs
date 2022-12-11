using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Commands.CreateProduct;
using Smoltra.Application.Products.Commands.UpdateProduct;

namespace Smoltra.WebAPI.Models
{
    public class UpdateProductDto : IMapFrom<UpdateProductCommand>
    {
        public Guid ProductId { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public Guid CategoryId { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateProductDto, UpdateProductCommand>(); ;
        }
    }
}
