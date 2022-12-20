using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.CartItems.Queries.GetCartItemList
{
    public class GetCartItemListQuery : IRequest<CartItemListVm>
    {
        public Guid UserId { get; set; }
    }
}
