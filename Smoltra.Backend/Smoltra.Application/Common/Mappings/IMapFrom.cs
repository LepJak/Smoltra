using AutoMapper;

namespace Smoltra.Application.Common.Mappings
{
    public interface IMapFrom<T>
    {
        void Mapping(Profile profile)
            => profile.CreateMap(typeof(T), GetType());
    }
}
