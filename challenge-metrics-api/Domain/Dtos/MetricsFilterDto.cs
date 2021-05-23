using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Domain.Dtos
{
    public class MetricsFilterDto
    {
        
        [DefaultValue(7)]
        public uint ItemCount { get; set; } = 7;

        public DateTime? DateFrom { get; set; }

        public DateTime? DateTo { get; set; }

        [DefaultValue(false)]
        public Boolean GetAll { get; set; } = false;
    }
}
