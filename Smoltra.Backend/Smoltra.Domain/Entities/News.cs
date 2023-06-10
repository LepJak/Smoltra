using Smoltra.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class News : BaseAuditableEntity
    {
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Annotation { get; set; }
    }
}
