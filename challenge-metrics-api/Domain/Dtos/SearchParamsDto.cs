using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Domain.Dtos
{
    public class SearchParamsDto
    {
        public uint ItemsPerPage { get; set; }
        public uint PageNumber { get; set; }
    }
}
