using MediatR;

namespace Smoltra.Application.Images.Queries
{
    public class GetProductImageQuery : IRequest<ImagePathDto>
    {
        public Guid ImageId { get; set; }
    }
}
