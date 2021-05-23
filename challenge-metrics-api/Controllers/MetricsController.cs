using AutoMapper;
using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using ChallengeMetricsApi.Services.Metrics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Controllers
{
    [ApiController]
    [Route("metrics")]
    public class MetricsController : ControllerBase
    {     
        private readonly ILogger<MetricsController> _logger;
        private readonly IMetricsService _metricsService;
        private readonly IMapper _mapper;

        public MetricsController(ILogger<MetricsController> logger, IMetricsService metricsService, IMapper mapper)
        {
            _logger = logger;
            _metricsService = metricsService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<MetricDto>> Get([FromQuery] MetricsFilterDto filters)
        {
            IEnumerable<Metric> metrics;

            if (filters.GetAll)
            {
                metrics = _metricsService.GetAll();
            }
            else
            {
                metrics = _metricsService.GetFiltered(filters);
            }

            return Ok(_mapper.Map<List<MetricDto>>(metrics));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<MetricDto> Get(uint id)
        {
            if (id==0)
            {
                return BadRequest("Id must be greater than 0");
            }

            var metric = _metricsService.GetById(id);

            if (metric == null)
            {
                NotFound($" Metric {id} Not Found");
            }

            return Ok(_mapper.Map<MetricDto>(metric));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<MetricDto> Post([FromBody] MetricCreateDto  newMetric)
        {
            if (newMetric == null)
            {
                return BadRequest();
            }

            var createdMetric = _metricsService.Create(newMetric);

            if (createdMetric == null)
            {
                StatusCode(StatusCodes.Status500InternalServerError, $"Could not create Metric {newMetric.Name}, {newMetric.Value}");
            }

            return Ok(_mapper.Map<MetricDto>(createdMetric));
        }
    }
}
