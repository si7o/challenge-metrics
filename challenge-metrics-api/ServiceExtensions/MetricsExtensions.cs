using ChallengeMetricsApi.Repositories.Metrics;
using ChallengeMetricsApi.Services.Metrics;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.ServiceExtensions
{
    public static class MetricsExtensions
    {
        public static void AddMetricsServices(this IServiceCollection services) {
            services.AddTransient<IMetricsService, MetricsService>();
            services.AddTransient<IMetricsRepository , MetricsRepository>();
        }
    }
}
