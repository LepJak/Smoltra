using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class SpecificationGroupVariant : BaseEntity
    {
        public List<Category> Categories { get; set; }
            = new List<Category>();
        public string? Name { get; set; }
        public string? Title { get; set; }
        public List<SpecificationVariant> SpecificationVariants { get; set; }
            = new List<SpecificationVariant>();
    }
}
