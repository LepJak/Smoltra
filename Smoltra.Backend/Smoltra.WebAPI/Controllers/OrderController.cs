using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Orders.AddOrderItems;
using Smoltra.Application.Orders.ChangeOrderState;
using Smoltra.Application.Orders.Queries.GetListOrderByUserId;
using Smoltra.Application.Orders.Queries.GetOrderDetails;
using Smoltra.WebAPI.Models;

namespace Smoltra.WebAPI.Controllers
{
    public class OrderController : BaseController
    {
        public OrderController(IMapper mapper) =>
            _mapper = mapper;

            private readonly IMapper _mapper;
        
        [HttpPost]
        public async Task<ActionResult<Guid>> Post([FromBody]AddOrderItemsDto addOrderItemsDto )
        {
            var command = _mapper.Map<AddOrderItemsCommand>(addOrderItemsDto);
            command.UserId = UserId;
            var id = await Mediator.Send(command);
            return id;
        }
        [HttpGet]
        public async Task<ActionResult<OrderListVm>> Get()
        {
            var result = await Mediator.Send(new GetListOrderByUserIdQuery
            {
                UserId = UserId
            });
            return result;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetailsVm>> Get(Guid id)
        {
            var result = await Mediator.Send(new GetOrderDetailsQuery
            {
                UserId = UserId,
                OrderId = id
            });
            return result;
        }
        [HttpPut]
        public async Task<ActionResult> Update(UpdateOrderStateDto updateOrderStateDto)
        {
            await Mediator.Send(new ChangeOrderStateCommand
            {
                UserId = UserId,
                OrderId = updateOrderStateDto.OrderId,
                NewState = updateOrderStateDto.State
            });
            return NoContent();
        }
    }
}
