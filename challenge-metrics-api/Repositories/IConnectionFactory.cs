using System.Data.Common;

namespace ChallengeMetricsApi.Repositories
{
    public interface IConnectionFactory
    {
        DbConnection CreateRead();
        DbConnection CreateWrite();
    }
}
