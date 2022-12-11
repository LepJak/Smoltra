using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using Smoltra.Domain.Entities;

namespace Smoltra.Application.Common.Interfaces
{
    public interface ISmoltraDbContext
    {
        DbSet<Product> Products { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<SpecificationVariant> SpecificationVariants { get; set; }
        DbSet<SpecificationGroupVariant> SpecificationGroupVariants { get; set; }
        DbSet<ProductSpecification> ProductSpecifications { get; set; }
        DbSet<ProductSpecificationGroup> ProductSpecificationGroups { get; set; }
        DbSet<UnitsOfMeasurement> UnitsOfMeasurements { get; set; }
        DbSet<ProductImage> ProductImages { get; set; }
        DbSet<SpecificationValue> SpecificationValues { get; set; }
        DbSet<ImageSet> ImageSets { get; set; }


        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        DbSet<T> Set<T>() where T : class;
    }
}
