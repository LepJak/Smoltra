using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoltra.Application.Common.Mappings;
using System.Reflection;

namespace Smoltra.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection
            AddApplication(this IServiceCollection services)
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());            
            return services;
        }
    }
}
