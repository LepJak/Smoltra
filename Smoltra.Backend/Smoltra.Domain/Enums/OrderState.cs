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
        Accept = 2,
        Completed = 3, 
        InWork = 4,
        WaitGetting = 5
    }
}
