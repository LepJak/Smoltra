using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smoltra.Domain.Entities;
using System.Threading.Tasks.Dataflow;

namespace Smoltra.Infrastructure.Persistence.EntityTypeConfigurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(product => product.Id);
            builder.Property(product => product.CategoryId).IsRequired(false);
            builder.Navigation(product => product.Category).IsRequired(false);
            builder.HasOne(product => product.GeneralImage)
            .WithOne(image => image.Product)
                .HasForeignKey<ProductImage>(p => p.ProductId);
            //TODO: Add more configuration
        }
    }
}
