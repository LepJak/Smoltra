using AutoMapper;
using Smoltra.Application.CartItems.Command.AddProductToCart;
using Smoltra.Application.Common.Mappings;

namespace Smoltra.WebAPI.Models
{
    public class CreateCartItemDto : IMapFrom<AddProductToCartCommand>
    {
        public Guid ProductId { get; set; }
        public int Count { get; set; }

        public void Mapping(Profile profile) 
        {
            profile.CreateMap<CreateCartItemDto, AddProductToCartCommand>();
        }
    }
}
