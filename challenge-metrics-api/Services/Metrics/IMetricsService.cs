using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using System.Collections.Generic;

namespace ChallengeMetricsApi.Services.Metrics
{
    public interface IMetricsService
    {
        public Metric Create(MetricCreateDto metric);
        public IEnumerable<Metric> GetAll();
        public Metric GetById(uint id);
        public IEnumerable<Metric> Search(SearchParamsDto searchParams);
    }
}