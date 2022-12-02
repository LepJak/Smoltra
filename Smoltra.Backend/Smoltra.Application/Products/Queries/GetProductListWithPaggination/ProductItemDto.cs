using AutoMapper;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Queries.GetProductListWithPaggination
{
    public class ProductItemDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public decimal Image { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Product, ProductItemDto>()
                .ForMember(p => p.Image, opt => opt.MapFrom(p => p.GeneralImageId));
        }
    }
}
