using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsListWithPaggination
{
    public class NewsListVm
    {
        public List<NewsLisItem> News { get; set; } = new();
    }
    public class NewsLisItem : IMapFrom<News>
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public string? Tittle { get; set; }
        public string? Annotation { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<News, NewsLisItem>()
                .ForMember(p => p.Created, opt => opt.MapFrom(p => p.Created))
                .ForMember(p => p.Tittle, opt => opt.MapFrom(p => p.Title))
                .ForMember(p => p.Id, opt => opt.MapFrom(p => p.Id))
                .ForMember(p => p.Annotation, opt => opt.MapFrom(p => p.Annotation));
        }
    }

}
