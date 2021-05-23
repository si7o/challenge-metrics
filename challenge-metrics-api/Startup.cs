using ChallengeMetricsApi.Repositories;
using ChallengeMetricsApi.ServiceExtensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace ChallengeMetricsApi
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {            
            services.AddMapperProfiles();
            services.AddMetricsServices();
            services.AddSingleton<IConnectionFactory>(
                new SQLiteConnectionFactory(
                    Configuration.GetConnectionString("metrics_read").Replace("{AppDir}", AppDomain.CurrentDomain.BaseDirectory),
                    Configuration.GetConnectionString("metrics_write").Replace("{AppDir}", AppDomain.CurrentDomain.BaseDirectory)
                )
            );

            services.AddControllers();

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Challenge Metrics API",
                    Description = "Challenge Metrics API Definition"
                });
            });

            services.AddMvc();
            services.AddCorsServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger(c =>
            {
                c.SerializeAsV2 = true;
            });
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Challenge Metrics API");
            });

            app.UseRouting();

            app.UseCors(CorsServices.CorsPolicyName);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
