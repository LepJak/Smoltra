using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.NewsEvents.Commands.DeleteNews
{
    public class DeleteNewsCommand : IRequest<Unit>
    {
        public Guid NewsId { get; set; }
    }
}
