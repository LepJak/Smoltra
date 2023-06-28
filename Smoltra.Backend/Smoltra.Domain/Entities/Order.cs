using Smoltra.Domain.Common;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class Order : BaseAuditableEntity
    {
        public string? Email { get; set; }
        public Guid UserId { get; set; }       
        public string? Description { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        = new();
        public OrderState State { get; set; }
    }
}
