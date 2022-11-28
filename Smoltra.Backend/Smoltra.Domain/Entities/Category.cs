using Smoltra.Domain.Common;

namespace Smoltra.Domain.Entities
{
    public class Category : BaseEntity
    {
        public string? Name { get; set; }
        public Category? ParentCategory { get; set; }
        public Guid? ParentCategoryId { get; set; }
        public List<Product> Products { get; set; }
            = new List<Product>();
        public List<SpecificationGroupVariant> SpecificationGroupVariants { get; set; }
            = new List<SpecificationGroupVariant>();
    }
}
