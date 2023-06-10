using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.NewsEvents.Queries.GetNewsListWithPaggination;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Queries.GetNewsDetails
{
    public class NewsDetailsVm : IMapFrom<News>
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Annotation { get; set; }
        public DateTime Created { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<News, NewsDetailsVm>();
        }
    }
}
