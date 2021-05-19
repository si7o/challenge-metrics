using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeMetricsApi.Repositories
{
    public class SQLiteConnectionFactory : IConnectionFactory
    {
        private readonly string readConnectionString;
        private readonly string writeConnectionString;

        public SQLiteConnectionFactory(string readConnectionString, string writeConnectionString)
        {
            this.readConnectionString = readConnectionString;
            this.writeConnectionString = writeConnectionString;
        }

        public DbConnection CreateRead()
        {
            return new SqliteConnection(readConnectionString);
        }

        public DbConnection CreateWrite()
        {
            return new SqliteConnection(writeConnectionString);
        }
    }
}
