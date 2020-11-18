using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class Professeurs_CoursDAO
    {
        private static readonly string TABLE_NAME = "professeurs_cours";
        
        public static readonly string FIELD_ID_PROFESSEURS = "id_professeurs";
        public static readonly string FIELD_ID_COURS = "id_cours";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET_PROFESSEURS = REQ_QUERY + $" where {FIELD_ID_PROFESSEURS} = @{FIELD_ID_PROFESSEURS}";
        private static readonly string REQ_GET_COURS = REQ_QUERY + $" where {FIELD_ID_COURS} = @{FIELD_ID_COURS}";
        


        public static List<Professeurs_Cours> Query()
        {
            List<Professeurs_Cours> prof_cours = new List<Professeurs_Cours>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    prof_cours.Add(new Professeurs_Cours(reader));
                }

                return prof_cours;
            }
        }

        public static List<Professeurs_Cours> GetProfesseurs(int id)
        {
            List<Professeurs_Cours> cours = new List<Professeurs_Cours>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET_PROFESSEURS;
                command.Parameters.AddWithValue($"{FIELD_ID_PROFESSEURS}", id);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    cours.Add(new Professeurs_Cours(reader));
                }

                return cours;
            }
        }   
        
        public static List<Professeurs_Cours> GetCours(int id)
        {
            List<Professeurs_Cours> cours = new List<Professeurs_Cours>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET_COURS;
                command.Parameters.AddWithValue($"{FIELD_ID_COURS}", id);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    cours.Add(new Professeurs_Cours(reader));
                }

                return cours;
            }
        } 
    }
}