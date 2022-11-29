using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Common.Interfaces
{
    public interface ISmoltraDbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SpecificationVariant> SpecificationVariants { get; set; }
        public DbSet<SpecificationGroupVariant> SpecificationGroupVariants { get; set; }
        public DbSet<ProductSpecification> ProductSpecifications { get; set; }
        public DbSet<ProductSpecificationGroup> ProductSpecificationGroups { get; set; }
        public DbSet<UnitsOfMeasurement> UnitsOfMeasurements { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<SpecificationValue> SpecificationValues { get; set; }


        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        DbSet<T> Set<T>() where T : class;
    }
}
