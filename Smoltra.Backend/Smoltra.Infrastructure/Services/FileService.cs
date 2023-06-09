using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Infrastructure.Services
{
    public class FileService : IFileService
    {
        //Переписать на вытягивания пути из конфига
        public bool DeleteProductImage(Guid id)
        {
            var path = Directory.GetFiles("C:\\Users\\Евгений\\Desktop\\SMOLTRAIMAGES\\");
            var file = path.FirstOrDefault(x => x.Contains(id.ToString()));
            if(file != null)
            {
                if (File.Exists(file));
                {
                    File.Delete(file);
                    return true;
                }
            }
            return false;
        }

        public PhysicalFileResult GetProductImage(Guid id)
        {
            var path = $"C:\\Users\\Евгений\\Desktop\\SMOLTRAIMAGES\\{id}.jpg";
            if (!File.Exists(path))
                throw new NotFoundException("Image", id);
            return new PhysicalFileResult(path, "image / jpg");
        }

        public bool SaveProductImage(Guid id, IFormFile image)
        {
            try
            {
                var path = $"C:\\Users\\Евгений\\Desktop\\SMOLTRAIMAGES\\{id}.jpg";
                using var fileStream = new FileStream(path, FileMode.Create);
                image.CopyTo(fileStream);

                return true;
            }
            catch
            {
                return false;
            }
            
        }
    }
}
