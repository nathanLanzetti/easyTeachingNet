using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class QuestionsDAO
    {
        private static readonly string TABLE_NAME = "questions";

        public static readonly string FIELD_ID = "id_questions";
        public static readonly string FIELD_NAME = "nom_questions";
        public static readonly string FIELD_AUTHOR = "autheur_questions";
        public static readonly string FIELD_COURS = "cours_questions";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_NAME}, {FIELD_AUTHOR},{FIELD_COURS}) " +
            $"output inserted.{FIELD_ID}" +
            $" values (@{FIELD_NAME},@{FIELD_AUTHOR},@{FIELD_COURS})";
        private static readonly string REQ_UPDATE =
            $"update {TABLE_NAME} set " +
            $"{FIELD_NAME} = @{FIELD_NAME}, {FIELD_AUTHOR} = @{FIELD_AUTHOR}, {FIELD_COURS} = @{FIELD_COURS}" +
            $" where {FIELD_ID}=@{FIELD_ID}";
        private static readonly string REQ_DELETE =
            $"delete from {TABLE_NAME} where {FIELD_ID} = @{FIELD_ID}";
        
        public static List<Questions> Query()
        {
            List<Questions> questions = new List<Questions>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    questions.Add(new Questions(reader));
                }

                return questions;
            }
        }

        public static Questions Get(int id)
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
                    return new Questions(reader);
                }

                return null;
            }
            
        }

        public static Questions Post(Questions question)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;
                command.Parameters.AddWithValue($"{FIELD_NAME}", question.name);
                command.Parameters.AddWithValue($"{FIELD_AUTHOR}", question.author);
                command.Parameters.AddWithValue($"{FIELD_COURS}", question.cours);

                question.id = (int) command.ExecuteScalar();
            }

            return question;
        }

        public static bool Update(Questions question)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;

                command.Parameters.AddWithValue($"{FIELD_ID}", question.id);
                command.Parameters.AddWithValue($"{FIELD_NAME}", question.name);
                command.Parameters.AddWithValue($"{FIELD_AUTHOR}", question.author);
                command.Parameters.AddWithValue($"{FIELD_COURS}", question.cours);

                return command.ExecuteNonQuery() == 1;
            }
        }

        public static bool Delete(int id)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($"{FIELD_ID}", id);

                return command.ExecuteNonQuery() == 1;
            }
        }
        
    }
}