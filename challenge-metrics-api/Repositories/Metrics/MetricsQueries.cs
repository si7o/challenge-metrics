namespace ChallengeMetricsApi.Repositories.Metrics
{
    public static class MetricsQueries
    {
        public const string SelectMetric =
            @"SELECT rowid AS Id, datetime(created_at,'unixepoch','localtime') AS CreatedAt, name as Name, value as Value 
            FROM metrics 
            WHERE rowid = @Id;";

        public const string InsertMetric =
            @"INSERT INTO metrics (name, value, created_at) 
                VALUES (@Name, @Value, strftime('%s', @CreatedAt, 'utc'));
            SELECT last_insert_rowid();";

        public const string SelectMetrics =
            @"SELECT rowid AS Id, datetime(created_at,'unixepoch','localtime') AS CreatedAt, name as Name, value as Value 
            FROM metrics 
            ORDER BY CreatedAt desc;";

        public const string SelectMetricsFiltered =
            @"SELECT 
                rowid AS Id, datetime(created_at,'unixepoch','localtime') AS CreatedAt, name as Name, value as Value 
            FROM metrics 
            WHERE (@DateFrom IS NULL OR created_at >= strftime('%s',@DateFrom,'utc'))
                AND (@DateTo IS NULL OR created_at <= strftime('%s',@DateTo,'utc'))                 
            ORDER BY CreatedAt desc
            LIMIT @ItemCount;";

        public const string SelectMetricsOffset =
            @"SELECT 
                rowid AS Id, datetime(created_at,'unixepoch', 'localtime') AS CreatedAt, name as Name, value as Value 
            FROM metrics 
            ORDER BY CreatedAt desc
            LIMIT @ItemCount OFFSET @ItemOffset;";
    }
}
