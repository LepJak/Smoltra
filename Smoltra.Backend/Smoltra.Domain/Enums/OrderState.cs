using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Enums
{
    public enum OrderState
    {
        WaitingAccept = 1,
        WaitingPayment = 2,
        Completed =5, 
        InWork = 3,
        WaitGetting = 4
    }
}
