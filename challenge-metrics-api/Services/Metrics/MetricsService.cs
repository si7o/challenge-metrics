using AutoMapper;
using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using ChallengeMetricsApi.Repositories.Metrics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Services.Metrics
{
    public class MetricsService : IMetricsService
    {
        private readonly IMetricsRepository _repository;
        private readonly IMapper _mapper;

        public MetricsService(IMetricsRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }


        public IEnumerable<Metric> GetAll()
        {
            return _repository.GetAll();
        }

        public IEnumerable<Metric> Search(SearchParamsDto searchParams)
        {
            return _repository.Search(searchParams);
        }

        public Metric GetById(uint id)
        {
            return _repository.GetById(id); 
        }

        public Metric Create(MetricCreateDto metric)
        {
            var _newMetric = _mapper.Map<Metric>(metric);
            
            var id = _repository.Create(_newMetric);
            if(id <=0 )
            {
                return default;
            }

            return _repository.GetById((uint)id);           
        }
    }
}
