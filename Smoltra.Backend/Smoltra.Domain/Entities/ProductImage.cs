using Smoltra.Domain.Common;


namespace Smoltra.Domain.Entities
{
    public class Image : BaseEntity
    {
        public Product? Product { get; set; }
        public Guid? ProductId { get; set; }

    }
}
