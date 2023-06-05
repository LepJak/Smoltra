using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Products.Commands.CreateProduct;
using Smoltra.Application.Products.Commands.DeleteProduct;
using Smoltra.Application.Products.Commands.UpdateProduct;
using Smoltra.Application.Products.Queries.GetProductDetails;
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
            Get(int numberPage = 1, int countItems = 20)
        {
            var request = new GetProductProductListQueryDto()
            {
                NumberPage = numberPage,
                CountProducts = countItems
            };
            var query = _mapper
                .Map<GetProductListWithPagginationQuery>(request);
            var products = await Mediator.Send(query);
            return Ok(products);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult>
            Delete(Guid id)
        {
            await Mediator.Send(new DeleteProductCommand { ProductId = id });
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Guid>>
            Create([FromForm] CreateProductDto createProductDto)
        {
            var query = _mapper.Map<CreateProductCommand>(createProductDto);
            var id = await Mediator.Send(query);
            return id;
        }

        [HttpPut]
        public async Task<ActionResult>
            Update([FromQuery] UpdateProductDto updateProductDto)
        {
            var query = _mapper.Map<UpdateProductCommand>(updateProductDto);
            await Mediator.Send(query);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDetailsVm>>
            Get(Guid id)
        {
            var product = await Mediator.Send(new GetProductDetailsQuery
            {
                ProductId = id
            });
            return Ok(product);
        }
    }
}
