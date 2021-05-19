namespace ChallengeMetricsApi.Repositories.Metrics
{
    public static class MetricsQueries
    {
        public const string SelectMetric =
            @"SELECT rowid AS Id, created_at AS CreatedAt, name as Name, value as Value FROM metrics where rowid = @Id;";

        public const string InsertMetric =
            @"INSERT INTO metrics (name, value, created_at) VALUES (@Name, @Value, datetime(@CreatedAt));
              SELECT last_insert_rowid();";

        public const string SelectMetrics =
            @"SELECT rowid AS Id, created_at AS CreatedAt, name as Name, value as Value FROM metrics;";
    }
}
