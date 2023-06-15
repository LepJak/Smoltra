using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Orders.Queries.GetOrderDetails;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.Queries.GetOrderList
{
    public class OrderListVm
    {
        public List<OrderListItem> Orders { get; set; } = new();
    }

    public class OrderListItem : IMapFrom<Order>
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public int TotalPrice { get; set; }
        public int State { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Order, OrderListItem>()
                .ForMember(p => p.Id, opt => opt.MapFrom(p => p.Id))
                .ForMember(p => p.TotalPrice, opt => opt.MapFrom(p => p.OrderItems.Sum(x => x.Price)))
                .ForMember(p => p.Created, opt => opt.MapFrom(p => p.Created))
                .ForMember(p => p.State, opt => opt.MapFrom(p => (int)p.State));
        }
    }
}
