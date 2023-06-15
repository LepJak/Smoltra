using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Orders.AddOrderItems;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.Queries.GetListOrderByUserId
{
    public class OrderListVm 
    {
        
        public List<OrderListItemDto> Orders { get; set; }
        = new();

    }
    public class OrderListItemDto : IMapFrom<Order>
    {
        public Guid Id { get; set; }
        public int CountItems { get; set; }
        public decimal TotalPrice { get; set; }
        public DateTime DateCreated { get; set; }
        public int State { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Order, OrderListItemDto>()
                .ForMember(p => p.DateCreated, opt => opt.MapFrom(p => p.Created))
                .ForMember(p => p.State, opt => opt.MapFrom(p => (int)p.State))
                .ForMember(p => p.CountItems, opt => opt.MapFrom(p => p.OrderItems.Sum(x => x.Count)))
                .ForMember(p => p.TotalPrice, opt => opt
                .MapFrom(p => p.OrderItems.Sum
                (x => x.Price)));
        }
    }

}
