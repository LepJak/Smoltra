using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Infrastructure.Persistence.Repositories;
using Smoltra.Infrastructure.Services;
using System.Runtime.CompilerServices;

namespace Smoltra.Infrastructure.Persistence
{
    public static class DependencyInjection
    {
        public static IServiceCollection 
            AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("Default");

            services.AddDbContext<SmoltraDbContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });
            services.AddScoped<ISmoltraDbContext>(provider =>
                provider.GetRequiredService<SmoltraDbContext>());

            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<ICartItemRepository, CartItemRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IImageRepository, ImageRepository>();
            services.AddScoped<ISpecificationRepository, SpecificationRepository>();
            services.AddScoped<ISpecificationGroupRepository, SpecificationGroupRepository>();
            services.AddScoped<IFileService, FileService>();
            return services;
        }
    }
}
