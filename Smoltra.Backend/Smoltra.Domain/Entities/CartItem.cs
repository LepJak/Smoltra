using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class CartItem : BaseEntity
    {
        public Guid UserId { get; set; }
        public Product? Product { get; set; }
        public Guid ProductId { get; set; }
        public int Count { get; set; }
    }
}
