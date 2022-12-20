using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.CartItems.Command.UpdateCartItem
{
    public class UpdateCartItemCommand
        : IRequest<Unit>
    {
        public Guid UserId { get; set; }
        public Guid CartItemId { get; set; }
        public int Count { get; set; }
    }
}
