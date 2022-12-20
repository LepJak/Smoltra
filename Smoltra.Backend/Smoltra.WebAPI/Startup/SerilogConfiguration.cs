using Serilog;

namespace Smoltra.WebAPI.Startup
{
    public static class SerilogConfiguration
    {
        public static WebApplicationBuilder ConfigureSerilog(this WebApplicationBuilder builder)
        {
            Log.Logger = new LoggerConfiguration().MinimumLevel
                .Override("Microsoft", Serilog.Events.LogEventLevel.Information)
                .WriteTo.Console()
                .CreateLogger();
            builder.Host.UseSerilog();
             
            return builder;
        }
    }
}
