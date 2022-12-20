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
        public DateTime DateCreate { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Order, OrderListItemDto>()
                .ForMember(p => p.DateCreate, opt => opt.MapFrom(p => p.Created))
                .ForMember(p => p.CountItems, opt => opt.MapFrom(p => p.OrderItems.Sum(x => x.Count)))
                .ForMember(p => p.TotalPrice, opt => opt
                .MapFrom(p => p.OrderItems.Sum
                (x => x.Product != null ? x.Product.Price * x.Count : 0)));
        }
    }

}
