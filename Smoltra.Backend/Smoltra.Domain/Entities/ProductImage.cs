using Smoltra.Domain.Common;


namespace Smoltra.Domain.Entities
{
    public class ProductImage : BaseEntity
    {
        public Guid ProductId { get; set; }
        public Product? Product { get; set; }
    }
}
