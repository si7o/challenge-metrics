
using System;

namespace ChallengeMetricsApi.Domain.Dtos
{
    public class MetricCreateDto
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public DateTime CreatedAt { get; } = DateTime.Now;
    }
}
