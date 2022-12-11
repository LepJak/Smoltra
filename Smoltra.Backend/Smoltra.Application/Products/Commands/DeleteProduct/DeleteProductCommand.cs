using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Products.Commands.DeleteProduct
{
    public class DeleteProductCommand 
        :IRequest<Unit>
    {
        public Guid UserId { get; set; }
        public Guid ProductId { get; set; }
    }
}
