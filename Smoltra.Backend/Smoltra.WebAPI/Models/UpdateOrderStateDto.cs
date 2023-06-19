namespace Smoltra.WebAPI.Models
{
    public class UpdateOrderStateDto
    {
        public Guid OrderId { get; set; }
        public int State { get; set; }
    }
}
