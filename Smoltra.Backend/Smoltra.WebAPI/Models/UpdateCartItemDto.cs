using AutoMapper;
using Smoltra.Application.CartItems.Command.AddProductToCart;
using Smoltra.Application.CartItems.Command.UpdateCartItem;
using Smoltra.Application.Common.Mappings;

namespace Smoltra.WebAPI.Models
{
    public class UpdateCartItemDto : IMapFrom<UpdateCartItemCommand>
    {
        public Guid CartItemId { get; set; }
        public int Count { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateCartItemDto, UpdateCartItemCommand>();
        }
    }
}
