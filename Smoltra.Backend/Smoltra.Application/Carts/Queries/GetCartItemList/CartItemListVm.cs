using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.CartItems.Queries.GetCartItemList
{
    public class CartItemListVm
    {
        public decimal TotalPrice { 
            
            get
            {
                return CartItems.Sum(x => x.Price * x.Count);
            }
        }
        public List<CartListItem> CartItems { get; set; }
        = new();
    }

    public class CartListItem : IMapFrom<CartItem>
    {
        public Guid CartItemId { get; set; }
        public Guid ProductId { get; set; }
        public string? ProductName { get; set; }
        public int Count { get; set; }
        public decimal Price { get; set; }
        public Guid? ImageId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<CartItem, CartListItem>()
                .ForMember(p => p.CartItemId, opt => opt.MapFrom(p => p.Id))
                .ForMember(p => p.ProductId, opt => opt.MapFrom(p => p.ProductId))
                .ForMember(p => p.Price, opt => opt
                .MapFrom(p => p.Product != null ? p.Product.Price : 0))
                .ForMember(p => p.ImageId, opt => opt
                .MapFrom(p => p.Product != null ? p.Product.GeneralImageForProduct.ImageId : null))
                .ForMember(p => p.ProductName, opt => opt
                .MapFrom(p => p.Product != null ? p.Product.Name : null));
        }
    }
}
