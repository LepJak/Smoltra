using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Categories.Commands.CreateCategory
{
    public class CreateCategoryCommand
        : IRequest<Guid>
    {
        public string? Name { get; set; }
        public Guid? ParentId { get; set; }
    }
}
