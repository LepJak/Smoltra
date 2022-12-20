using AutoMapper;
using MediatR;
using Smoltra.Application.CartItems.Queries.GetCartItemList;
using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.AddOrderItems
{
    public class AddOrderItemsCommand : IRequest<Guid>
    {
        public Guid UserId { get; set; }
        public List<OrderItemForAddingDto> OrderItems { get; set; }
            = new();
    }
    public class OrderItemForAddingDto
    {
        public Guid CartId { get; set; }
    }
}
