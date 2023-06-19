using Serilog;
using Smoltra.WebAPI.Middleware;

namespace Smoltra.WebAPI.Startup
{
    public static class MiddlewareConfiguration
    {
        public static WebApplication MiddlewareConfigure(this WebApplication app)
        {
            app.UseCors("AllowAll");
            app.ConfigureSwagger();
            app.UseCustomExceptionHandler();
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSerilogRequestLogging();
            app.MapControllers();

            return app;
        }
    }
}
