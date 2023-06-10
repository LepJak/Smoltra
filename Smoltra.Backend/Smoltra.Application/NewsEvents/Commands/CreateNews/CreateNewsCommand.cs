using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Smoltra.Application.NewsEvents.Commands.CreateNews
{
    public class CreateNewsCommand : IRequest<Guid>
    {
        public string? Title { get; set; }
        public string? Content { get; set; }
        public Guid UserId { get; set; }
        public string? Annotation { get; set; }
    }
}
