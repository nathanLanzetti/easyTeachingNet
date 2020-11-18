using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class CoursDAO
    {
        private static readonly string TABLE_NAME = "cours";

        public static readonly string FIELD_ID = "id_cours";
        public static readonly string FIELD_NOM = "nom_cours";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";

        public static List<Cours> Query()
        {
            List<Cours> cours = new List<Cours>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    cours.Add(new Cours(reader));
                }

                return cours;
            }
        }

        public static Cours Get(int id)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_ID}", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new Cours(reader);
                }

                return null;
            }
        }
        
    }
}