using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Orders.AddOrderItems;
using Smoltra.Domain.Entities;

namespace Smoltra.WebAPI.Models
{
    public class AddOrderItemsDto : IMapFrom<AddOrderItemsCommand>
    {
        public List<OrderItemForAddingDto> OrderItems { get; set; }
            = new();
        public void Mapping(Profile profile)
        {
            profile.CreateMap<AddOrderItemsDto, AddOrderItemsCommand>()
                .ForMember(p => p.OrderItems, opt => opt.MapFrom(p => p.OrderItems));
        }
    }
    public class OrderItemDto : IMapFrom<OrderItemForAddingDto>
    {
        public Guid CartItemId { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<OrderItemDto, OrderItemForAddingDto>();
        }
    }
}
