using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.NewsEvents.Commands.CreateNews;
using Smoltra.Application.NewsEvents.Commands.DeleteNews;
using Smoltra.Application.NewsEvents.Commands.UpdateNews;
using Smoltra.Application.NewsEvents.Queries.GetNewsDetails;
using Smoltra.Application.NewsEvents.Queries.GetNewsListWithPaggination;
using Smoltra.Application.Products.Commands.CreateProduct;
using Smoltra.Application.Products.Commands.DeleteProduct;
using Smoltra.Application.Products.Commands.UpdateProduct;
using Smoltra.Application.Products.Queries.GetProductDetails;
using Smoltra.Application.Products.Queries.GetProductListWithPaggination;
using Smoltra.WebAPI.Models;

namespace Smoltra.WebAPI.Controllers
{
    public class NewsController : BaseController
    {
        private readonly IMapper _mapper;

        public NewsController(IMapper mapper) => _mapper = mapper;

        [HttpGet]
        public async Task<ActionResult<NewsListVm>>
            Get(int numberPage = 1, int countItems = 20)
        {
            var request = new GetNewsListWithPagginationQuery()
            {
                NumberPage = numberPage,
                CountProducts = countItems
            };

            var products = await Mediator.Send(request);
            return Ok(products);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult>
            Delete(Guid id)
        {
            await Mediator.Send(new DeleteNewsCommand { NewsId = id });
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Guid>>
            Create([FromBody] CreateNewsDto createProductDto)
        {
            var query = _mapper.Map<CreateNewsCommand>(createProductDto);
            var id = await Mediator.Send(query);
            return id;
        }

        [HttpPut]
        public async Task<ActionResult>
            Update([FromBody] UpdateNewsDto updateProductDto)
        {
            var query = _mapper.Map<UpdateNewsCommand>(updateProductDto);
            await Mediator.Send(query);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NewsDetailsVm>>
            Get(Guid id)
        {
            var product = await Mediator.Send(new GetNewsDetailsQuery { NewsId = id });

            return Ok(product);
        }
    }
}
