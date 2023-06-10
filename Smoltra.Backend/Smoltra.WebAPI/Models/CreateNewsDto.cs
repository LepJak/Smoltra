using AutoMapper;
using Smoltra.Application.Common.Mappings;
using Smoltra.Application.NewsEvents.Commands.CreateNews;
using Smoltra.Application.Products.Commands.CreateProduct;

namespace Smoltra.WebAPI.Models
{
    public class CreateNewsDto : IMapFrom<CreateNewsCommand>
    {
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Annotation { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<CreateNewsDto, CreateNewsCommand>();
        }
    }
}
