using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Common
{
    public abstract class BaseEntity
    {
        public required Guid Id { get; set; }
    }
}
