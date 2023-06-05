using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Common.Interfaces
{
    public interface IFileService
    {
        public PhysicalFileResult GetProductImage(Guid id);
        public bool SaveProductImage(Guid id, IFormFile image);
    }
}
