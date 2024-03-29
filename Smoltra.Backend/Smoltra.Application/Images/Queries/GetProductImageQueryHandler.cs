﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Images.Queries
{
    internal class GetProductImageQueryHandler
        : IRequestHandler<GetProductImageQuery, ImagePathDto>
    {

        public GetProductImageQueryHandler(IFileService fileService) =>
           (_fileService) = (fileService);

        private readonly IFileService _fileService;

        public async Task<ImagePathDto> Handle(GetProductImageQuery request, 
            CancellationToken cancellationToken)
        {
            var result = new ImagePathDto();
            //TODO : Add file service and add extensions for images.
            //TODO : async.
            var path = $"C:\\Users\\Евгений\\Desktop\\SMOLTRAIMAGES\\{request.ImageId}.jpg";
            if(!File.Exists(path))
                throw new NotFoundException("Image", request.ImageId);
            result.Image = _fileService.GetProductImage(request.ImageId); new PhysicalFileResult(path, "image / jpg");

            return result;
        }
    }
}
