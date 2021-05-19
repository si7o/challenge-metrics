using AutoMapper;
using ChallengeMetricsApi.Domain.Dtos;
using ChallengeMetricsApi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Domain.MapperProfiles
{
    public class MetricsProfile : Profile
    {
        public MetricsProfile()
        {
            CreateMap<MetricDto, Metric>()
                .ReverseMap();

            CreateMap<MetricCreateDto, Metric>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => 0));
        }
    }
}
