using Smoltra.Domain.Common;


namespace Smoltra.Domain.Entities
{
    public class Image : BaseEntity
    {
        public Product? Product { get; set; }
        public Product? ProductForGeneral { get; set; }
        public Guid? ProductId { get; set; }
        public Guid? ProductForGeneralId { get; set; }
    }
}
