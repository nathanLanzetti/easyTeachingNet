using System.Data.SqlClient;

namespace projet_aout_bloc3
{
    public class Database
    {
        private static readonly string CONNECTION_STRING = 
            "Server=LAPTOP-ASAA9NF7;Database=bloc3_projet_ti;Integrated Security=SSPI;";
        
        public static SqlConnection GetConnection()
        {
            return new SqlConnection(CONNECTION_STRING);
        }
    }
}