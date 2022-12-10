using Microsoft.AspNetCore.Mvc;
using Smoltra.Application.Images.Queries;
using static System.Net.Mime.MediaTypeNames;

namespace Smoltra.WebAPI.Controllers
{
    public class ImagesController : BaseController
    {
        [HttpGet("{id}")]
        public  async Task<IActionResult> Get(Guid id)
        {
            var response = await  Mediator.Send(new GetProductImageQuery
            {
                ImageId= id
            });
            if(response.Image == null)
                return NotFound();
                
            return response.Image;           
        }
    }
}
