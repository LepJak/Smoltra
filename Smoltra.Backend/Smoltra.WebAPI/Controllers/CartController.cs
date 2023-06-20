using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.CartItems.Command.AddProductToCart;
using Smoltra.Application.CartItems.Command.DeleteCartItem;
using Smoltra.Application.CartItems.Command.UpdateCartItem;
using Smoltra.Application.CartItems.Queries.GetCartItemList;
using Smoltra.Application.Carts.Queries.GetCartItemsGuidList;
using Smoltra.WebAPI.Models;

namespace Smoltra.WebAPI.Controllers
{
    [Authorize]
    public class CartController : BaseController
    {
        private readonly IMapper _mapper;

        public CartController(IMapper mapper) => _mapper = mapper;

        [HttpPost]
        public async Task<Guid> Create([FromBody] CreateCartItemDto createCartItemDto)
        {
            var request = _mapper.Map<AddProductToCartCommand>(createCartItemDto);
            request.UserId = UserId;
            var id = await Mediator.Send(request);
            return id;
        }

        [HttpPut]
        public async Task Update([FromBody] UpdateCartItemDto updateCartItemDto)
        {
            var request = _mapper.Map<UpdateCartItemCommand>(updateCartItemDto);
            request.UserId = UserId;
            await Mediator.Send(request);

        }

        [HttpDelete("{id}")]
        public async Task DeleteItem(Guid id)
        {
            await Mediator
                .Send(new DeleteCartItemCommand { CartItemId = id, UserId = UserId });
        }

        [HttpGet]
        public async Task<CartItemListVm> Get()
        {
            var list = await Mediator
                .Send(new GetCartItemListQuery { UserId = UserId });
            return list;
        }

        [HttpGet("GetProductsGuid")]
        public async Task<CatItemsGuidListVm> GetproductsGuid()
        {
            var list = await Mediator
                .Send(new GetCartItemsGuidListQuery() { UserId = UserId });
            return list;
        }
    }
}
