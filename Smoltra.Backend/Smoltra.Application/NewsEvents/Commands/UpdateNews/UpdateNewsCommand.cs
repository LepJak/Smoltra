using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Commands.UpdateNews
{
    public class UpdateNewsCommand : IRequest<Unit>
    {
        public Guid NewsId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Annotation { get; set; }
        public Guid UserId { get; set; }
    }
}
