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
                                options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                                {
                                    ValidateIssuer = true,
                                    ValidateAudience = true,
                                    ValidAudience = "authServer",
                                    ValidIssuer = "clientServer",
                                    RequireExpirationTime = true,
                                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is the key that we will use in the encryption")),
                                    ValidateIssuerSigningKey = true
                                };
                            });
            return services;
        }
    }
}
