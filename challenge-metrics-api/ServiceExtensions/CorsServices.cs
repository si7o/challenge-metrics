using Microsoft.Extensions.DependencyInjection;

namespace ChallengeMetricsApi.ServiceExtensions
{
    public static class CorsServices
    {

        public readonly static string CorsPolicyName = "defaultCorsPolicy";

        public static IServiceCollection AddCorsServices(this IServiceCollection services)
        {
            
                services.AddCors(options => options.AddPolicy(CorsPolicyName, builder => builder
                .AllowAnyHeader()
                .WithMethods("GET", "POST", "PUT", "OPTIONS")
                .WithOrigins(
                    "http://localhost:8090",
                    "http://localhost:3000",
                    "http://localhost")
                ));
            return services;
        }
    }
}
