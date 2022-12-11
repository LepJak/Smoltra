using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    public class ProductItemDto : IMapFrom<Product>
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Category { get; set; }
        public decimal Price { get; set; }
        public Guid? ImageId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Product, ProductItemDto>()
                .ForMember(p => p.ImageId, opt => opt.MapFrom(p => p.GeneralImageId))
                .ForMember(p => p.Category, opt => opt.MapFrom(p => p.Category != null ? p.Category.Name : null));
        }
    }
}
