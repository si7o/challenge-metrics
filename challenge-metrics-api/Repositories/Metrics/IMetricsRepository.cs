using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Repositories.Metrics
{
    public interface IMetricsRepository
    {
        public IEnumerable<Metric> GetAll();

        public IEnumerable<Metric> Search(SearchParamsDto searchParams);

        public Metric GetById(uint id);

        public int Create(Metric metric);
    }
}
