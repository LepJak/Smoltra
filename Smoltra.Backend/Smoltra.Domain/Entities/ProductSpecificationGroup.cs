using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class ProductSpecificationGroup : BaseAuditableEntity
    {
        public string? Title { get; set; }
        public List<ProductSpecification>? ProductSpecifications { get; set; }
            = new List<ProductSpecification>();
        public Guid ProductId { get; set; }
        public Product? Product { get; set; }
    }
}
