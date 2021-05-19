using ChallengeMetricsApi.Domain.MapperProfiles;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.ServiceExtensions
{
    public static class AutomapperExtensions
    {
        public static void AddMapperProfiles(this IServiceCollection services){
            services.AddAutoMapper(c =>
                c.AddProfile<MetricsProfile>()
            );
        }
    }
}
