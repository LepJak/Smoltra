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
            builder.HasOne(product => product.ImageSet)
            .WithOne(image => image.Product)
                .HasForeignKey<ImageSet>(p => p.ProductId);           
            //TODO: Add more configuration
        }
    }
}
