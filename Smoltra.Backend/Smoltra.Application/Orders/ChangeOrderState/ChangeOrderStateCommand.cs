using MediatR;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.ChangeOrderState
{
    public class ChangeOrderStateCommand: IRequest<Unit>
    {
        public Guid UserId { get; set; }
        public Guid OrderId { get; set; }
        public int NewState { get; set; }
    }
}
