
using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.Domain.Entities;

namespace Smoltra.WebAPI.Models
{
    public class GetProductProductListQueryDto 
        : IMapFrom<GetProductListWithPagginationQuery>
    {
        public int NumberPage { get; set; } =1;
        public int CountProducts { get; set; } = 20;

        public void Mapping(Profile profile)
        {
            profile
                .CreateMap<GetProductProductListQueryDto,
                GetProductListWithPagginationQuery> ();
        }
    }
}
