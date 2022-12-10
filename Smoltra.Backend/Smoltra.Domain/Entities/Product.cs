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
        public ProductImage? GeneralImage { get; set; }     
        public Guid? GeneralImageId { get; set; }
        public ImageSet? ImageSet { get; set; }
        public Guid? ImageSetId { get; set; }
        public List<ProductSpecificationGroup> SpecificationGroups { get; set; }
            = new List<ProductSpecificationGroup>();
    }
}
