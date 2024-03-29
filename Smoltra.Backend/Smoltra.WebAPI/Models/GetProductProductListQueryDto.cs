﻿
using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.Domain.Entities;

namespace Smoltra.WebAPI.Models
{
    public class GetProductProductListQueryDto 
        : IMapFrom<GetProductListWithPagginationQuery>
    {
        public string? SearchingString { get; set; }
        public int NumberPage { get; set; } =1;
        public int CountProducts { get; set; } = 50;
        public void Mapping(Profile profile)
        {
            profile
                .CreateMap<GetProductProductListQueryDto,
                GetProductListWithPagginationQuery> ();
        }
    }
}
