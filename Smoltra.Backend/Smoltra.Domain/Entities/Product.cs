using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class Product : BaseAuditableEntity
    {
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public Category? Category { get; set; }
        public Guid? CategoryId { get; set; }
        public Image? GeneralImage { get; set; }     
        public Guid? GeneralImageId { get; set; }
        public ICollection<Image>? Images { get; set; }
        public List<ProductSpecificationGroup> SpecificationGroups { get; set; }
            = new List<ProductSpecificationGroup>();
    }
}
