using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.WebAPI.Models;

namespace Smoltra.WebAPI.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IMapper _mapper;

        public ProductController(IMapper mapper) => _mapper = mapper;

        [HttpGet]
        public async Task<ActionResult<ProductListVm>>
            Get([FromQuery] GetProductProductListQueryDto getProductProductListQuery)
        {
            var query = _mapper
                .Map<GetProductListWithPagginationQuery>(getProductProductListQuery);
            var products = await Mediator.Send(query);
            return Ok(products);
        }
    }
}
