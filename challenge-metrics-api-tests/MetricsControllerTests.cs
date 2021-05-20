using System;
using Xunit;
using AutoFixture;
using ChallengeMetricsApi.Controllers;
using Microsoft.Extensions.Logging;
using ChallengeMetricsApi.Services.Metrics;
using AutoMapper;
using Moq;
using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using ChallengeMetricsApi.Domain.MapperProfiles;
using System.Collections.Generic;
using System.Linq;

namespace challenge_metrics_api_tests
{
    public class MetricsControllerTests
    {
        MetricsController sut;
        Mock<ILogger<MetricsController>> loggerMock;
        Mock<IMetricsService> metricsServiceMock;
        Fixture fixture;
        IMapper mapper;

        public MetricsControllerTests ()
        {
            fixture = new Fixture();
            loggerMock = new Mock<ILogger<MetricsController>>();
            metricsServiceMock = new Mock<IMetricsService>();

            var configuration = new MapperConfiguration(cfg => {
                cfg.AddProfile(new MetricsProfile());
            });
            mapper = new Mapper(configuration);

            sut = new MetricsController(loggerMock.Object, metricsServiceMock.Object, mapper);
        }

        [Fact]
        public void Get_Metrics_returns_Ok_response()
        {
            var serviceResponseStub = fixture.CreateMany<Metric>();
            metricsServiceMock.Setup(x => x.GetAll()).Returns(serviceResponseStub);

            var response = sut.Get();

            Assert.IsType<OkObjectResult>(response.Result);
        }

        [Fact]
        public void Get_empty_Metrics_returns_Ok_response()
        {
            var serviceResponseStub = new List<Metric>();
            metricsServiceMock.Setup(x => x.GetAll()).Returns(serviceResponseStub);

            var response = sut.Get();

            Assert.IsType<OkObjectResult>(response.Result);
        }

        // TODO: add more tests
    }
}
