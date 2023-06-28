using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class GeneralImageForProduct : BaseEntity
    {
        public Guid? ImageId { get; set; }
    }
}
