using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    public class ProductListVm
    {
        public List<ProductItemDto> Products { get; set; } = new ();
    }
}
