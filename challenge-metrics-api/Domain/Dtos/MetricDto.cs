using System;

namespace ChallengeMetricsApi.Domain.Dtos
{
    public class MetricDto
    {
        public uint Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
