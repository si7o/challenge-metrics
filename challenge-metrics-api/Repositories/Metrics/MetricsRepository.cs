using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using Dapper;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace ChallengeMetricsApi.Repositories.Metrics
{
    public class MetricsRepository : IMetricsRepository
    {
        private readonly IConnectionFactory _connectionFactory;
        private readonly ILogger<MetricsRepository> _logger;

        public MetricsRepository(IConnectionFactory connectionFactory, ILogger<MetricsRepository> logger)
        {
            _connectionFactory = connectionFactory;
            _logger = logger;
        }

        public int Create(Metric metric)
        {
            try
            {
                
                using var connection = _connectionFactory.CreateWrite();
                connection.Open();
                var insertedId = connection.QuerySingleOrDefault<int>(MetricsQueries.InsertMetric, metric);

                return insertedId;                

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating Metric {object}", metric);
                return default;
            }

        }

        public IEnumerable<Metric> GetAll()
        {
            try
            {
                
                using var connection = _connectionFactory.CreateRead();
                connection.Open();
                var metrics = connection.Query<Metric>(MetricsQueries.SelectMetrics);

                return metrics;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting all Metrics");
                return default;
            }
        }


        public Metric GetById(uint id)
        {
            try
            {
                using var connection = _connectionFactory.CreateRead();
                connection.Open();
                var metric = connection.QuerySingleOrDefault<Metric>(MetricsQueries.SelectMetric, new { Id = id });

                return metric;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error searching Metrics for ID: {id}", id);
                return default;
            }
        }

        public IEnumerable<Metric> Filter(MetricsFilterDto filters)
        {
            try
            {
                using var connection = _connectionFactory.CreateRead();
                connection.Open();
                var metrics = connection.Query<Metric>(MetricsQueries.SelectMetricsFiltered, filters);

                return metrics;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting Metrics");
                return default;
            }
        }


    }
}
