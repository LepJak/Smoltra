using Microsoft.EntityFrameworkCore;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Domain.Entities;
using Smoltra.Infrastructure.Persistence.EntityTypeConfigurations;

namespace Smoltra.Infrastructure.Persistence
{
    public class SmoltraDbContext : DbContext, ISmoltraDbContext
    {
        public SmoltraDbContext(DbContextOptions<SmoltraDbContext> options) 
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SpecificationGroupVariant> SpecificationGroupVariants { get; set; }
        public DbSet<ProductSpecification> ProductSpecifications { get; set; }
        public DbSet<ProductSpecificationGroup> ProductSpecificationGroups { get; set; }
        public DbSet<SpecificationVariant> SpecificationVariants { get; set; }
        public DbSet<UnitsOfMeasurement> UnitsOfMeasurements { get; set; }
        public DbSet<Image> ProductImages { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<SpecificationValue> SpecificationValues { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //TODO : Add configurations
            builder.ApplyConfiguration(new ProductConfiguration());
            builder.Entity<Product>().HasMany(p => p.Images)
                .WithOne(i => i.Product)
                .HasForeignKey(e => e.ProductId);
            builder.Entity<Product>().HasOne(p => p.GeneralImage)
                .WithOne(i => i.ProductForGeneral)
                .HasForeignKey<Image>(p => p.ProductForGeneralId);

            base.OnModelCreating(builder);
        }

    }
}
