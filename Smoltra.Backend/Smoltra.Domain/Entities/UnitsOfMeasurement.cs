using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class UnitsOfMeasurement : BaseEntity
    {
        public string? Name { get; set; }
        public List<ProductSpecification>? ProductSpecifications { get; set; }
        public List<SpecificationVariant>? SpecificationVariants { get; set; }
    }
}
