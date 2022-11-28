using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class SpecificationValue : BaseEntity
    {
        public string? Name { get; set; }
        public ProductSpecification? ProductSpecification { get; set; }
        public Guid ProductSpecificationId { get; set; }
    }
}
