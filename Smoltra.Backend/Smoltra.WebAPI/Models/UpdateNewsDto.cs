using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.NewsEvents.Commands.UpdateNews;

namespace Smoltra.WebAPI.Models
{
    public class UpdateNewsDto : IMapFrom<UpdateNewsCommand>
    {
        public Guid NewsId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Annotation { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateNewsDto, UpdateNewsCommand>();
        }
    }
}
