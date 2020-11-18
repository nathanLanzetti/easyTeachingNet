using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class ProfesseursDAO
    {
        private static readonly string TABLE_NAME = "professeurs";

        public static readonly string FIELD_ID = "id_professeurs";
        public static readonly string FIELD_NAME = "nom_professeurs";
        public static readonly string FIELD_FIRSTNAME = "prenom_professeurs";
        public static readonly string FIELD_MAIL = "mail_professeurs";
        public static readonly string FIELD_PASSWORD = "password_professeurs";
        
        // QUERIES
        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";

        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";

        /*
        private static readonly string REQ_JOIN_SUBJECTS =
            $"select {TABLE_NAME}.{FIELD_NAME}, cours.nom_cours from {TABLE_NAME} " +
            $"inner join professeurs_cours on {TABLE_NAME}.{FIELD_ID} = professeurs_cours.id_professeurs" +
            "inner join cours on professeurs_cours.id_cours = cours.id_cours";
            */
        
        
        
        // Queries implementations
        public static List<Professeurs> Query()
        {
            List<Professeurs> profs = new List<Professeurs>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    profs.Add(new Professeurs(reader));
                }

                return profs;
            }
        }

        public static Professeurs Get(int id)
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
                    return new Professeurs(reader);
                }

                return null;
            }
        }
        
        
    }
}