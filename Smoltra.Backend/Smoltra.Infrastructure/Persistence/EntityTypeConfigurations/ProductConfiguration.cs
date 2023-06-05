﻿using Microsoft.EntityFrameworkCore;
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
                   
            //TODO: Add more configuration
        }
    }
}
