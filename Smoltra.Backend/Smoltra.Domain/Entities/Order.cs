using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class Order : BaseAuditableEntity
    {
        public Guid UserId { get; set; }       
        public string? Description { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        = new();
    }
}
