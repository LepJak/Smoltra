using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;


namespace Smoltra.Application.Orders.Queries.GetOrderDetails
{
    public class OrderDetailsVm
    {
        public Guid OrderId { get; set; }
        public int State { get; set; }
        public DateTime Created { get; set; }
        public decimal TotalPrice
        {
            get
            {
                return OrderItems.Sum(x => x.Count * x.TotalPrice);
            }
        }
        public List<OrderProductItemDto> OrderItems { get; set; }
            = new();
    }
    public class OrderProductItemDto : IMapFrom<OrderItem>
    {
        public Guid OrderItemId { get; set; }
        public Guid ProductId { get; set; }
        public Guid ImageId { get; set; }
        public string? NameProduct { get; set; }
        public decimal PriceForOne { get; set; }
        public int Count { get; set; }
        public decimal TotalPrice { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<OrderItem, OrderProductItemDto>()
                .ForMember(p => p.NameProduct, opt => opt
                .MapFrom(p => p.Product != null ? p.Product.Name : null))
                .ForMember(p => p.ImageId, opt => opt
                .MapFrom(p => p.Product.GeneralImageForProduct.ImageId))
                .ForMember(p => p.OrderItemId, opt => opt.MapFrom(p => p.Id))
                .ForMember(p => p.Count, opt => opt.MapFrom(p => p.Count))
                .ForMember(p => p.PriceForOne, opt => opt.MapFrom(p => p.PriceForUnit))
                .ForMember(p => p.TotalPrice, opt => opt.MapFrom(p => p.Price));
        }
    }
}
