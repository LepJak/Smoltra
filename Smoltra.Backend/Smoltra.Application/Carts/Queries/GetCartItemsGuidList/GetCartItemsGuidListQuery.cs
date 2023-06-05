using MediatR;
using Smoltra.Application.CartItems.Queries.GetCartItemList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Carts.Queries.GetCartItemsGuidList
{
    public class GetCartItemsGuidListQuery : IRequest<CatItemsGuidListVm>
    {
        public Guid UserId { get; set; }
    }
}
