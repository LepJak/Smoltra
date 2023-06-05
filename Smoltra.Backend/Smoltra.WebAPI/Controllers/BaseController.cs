using MediatR;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Smoltra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseController : ControllerBase
    {
        private IMediator? _mediator;
        protected IMediator Mediator =>
            _mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>();
        internal Guid UserId => new Guid("61470C9A-B262-435A-BC10-3CAC18BFB929");//!User?.Identity?.IsAuthenticated ?? false
            //? Guid.Empty
            //: Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
    }
}
