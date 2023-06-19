using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Smoltra.Application;
using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Mappings;
using Smoltra.Infrastructure.Persistence;
using System.Reflection;
using System.Text;

namespace Smoltra.WebAPI.Startup
{
    public static class DpendencyIngectionSetup
    {
        public static IServiceCollection 
            RegisterServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyHeader();
                    policy.AllowAnyMethod();
                    policy.AllowAnyOrigin();
                });
            });
            services.AddEndpointsApiExplorer();
            services.AddAutoMapper(config =>
            {
                config.AddProfile(new MappingProfile(Assembly.GetExecutingAssembly()));
                config.AddProfile(new MappingProfile(typeof(ISmoltraDbContext).Assembly));
            });
            services.AddApplication();
            services.AddPersistence(configuration);
            services.AddSwaggerGen();

            services.AddAuthentication(config =>
            {
                config.DefaultAuthenticateScheme =
                    JwtBearerDefaults.AuthenticationScheme;
                config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                 .AddJwtBearer("Bearer", options =>
                 {
                     options.Authority = "https://localhost:44386/";
                     options.Audience = "SmoltraBackend";
                     options.RequireHttpsMetadata = false;
                 });
            services.AddHttpContextAccessor();
            return services;
        }
    }
}
