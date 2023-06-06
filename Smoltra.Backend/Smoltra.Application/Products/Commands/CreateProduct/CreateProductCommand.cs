using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Commands.CreateProduct
{
    public class CreateProductCommand : IRequest<Guid>
    {
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public Guid CategoryId { get; set; }
        public Guid UserId { get; set; }
        public List<IFormFile> Images { get; set; } = new List<IFormFile>();
        public string? SpecificationGroups { get; set; }
    }

    public class SpecificatinGroupDto
    {
        public string? Name { get; set; }
        public List<SpecificationDto> Specifications { get; set; } = new List<SpecificationDto>();
    }
    public class SpecificationDto
    {
        public string? Name { get; set; }
        public string? Value { get; set; }
    }
}
