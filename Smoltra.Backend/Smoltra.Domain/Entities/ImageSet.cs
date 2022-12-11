using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class ImageSet : BaseEntity
    {
        public Guid? ProductId { get; set; }
        public Product? Product { get; set; }
        public List<ProductImage> ProductImages { get; set; } 
            = new ();
    }
}
