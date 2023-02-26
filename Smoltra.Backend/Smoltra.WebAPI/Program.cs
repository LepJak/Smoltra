using Smoltra.Infrastructure.Persistence;
using Smoltra.WebAPI.Startup;

var builder = WebApplication.CreateBuilder(args);
builder.Services.RegisterServices(builder.Configuration);
builder.ConfigureSerilog();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider
    .GetRequiredService<SmoltraDbContext>();
DbInitializer.Initialize(context);
DbInitializer.Seed(context);

app.MiddlewareConfigure();
app.Run();
