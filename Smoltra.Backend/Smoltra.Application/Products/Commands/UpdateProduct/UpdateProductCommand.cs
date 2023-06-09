using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Smoltra.Application.Products.Queries.GetProductDetails.ProductDetailsVm;

namespace Smoltra.Application.Products.Commands.UpdateProduct
{
    public class UpdateProductCommand : IRequest<Unit>
    {
        public Guid ProductId { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public Guid CategoryId { get; set; }
        public Guid UserId { get; set; }
        public List<Guid> DeletedImageIds { get; set; } = new List<Guid>();
        public List<IFormFile> NewImages { get; set; } = new List<IFormFile>();
        public string? SpecificationGroups { get; set; }
    }
}
