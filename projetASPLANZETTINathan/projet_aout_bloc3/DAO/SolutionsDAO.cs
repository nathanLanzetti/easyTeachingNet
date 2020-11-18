using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class SolutionsDAO
    {
        private static readonly string TABLE_NAME = "solutions";
        
        public static readonly string FIELD_ID = "id_solutions";
        public static readonly string FIELD_TEXT = "texte_solutions";
        public static readonly string FIELD_ID_QUESTION = "id_questions";
        public static readonly string FIELD_ANSWER = "reponse_solutions";
        
        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";
        private static readonly string REQ_GET_BY_QUESTIONS = REQ_QUERY + $" where {FIELD_ID_QUESTION} = @{FIELD_ID_QUESTION}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_TEXT}, {FIELD_ID_QUESTION},{FIELD_ANSWER}) " +
            $"output inserted.{FIELD_ID}" +
            $" values (@{FIELD_TEXT},@{FIELD_ID_QUESTION},@{FIELD_ANSWER})";
        private static readonly string REQ_UPDATE =
            $"update {TABLE_NAME} set " +
            $"{FIELD_TEXT} = @{FIELD_TEXT}, {FIELD_ID_QUESTION} = @{FIELD_ID_QUESTION}, {FIELD_ANSWER} = @{FIELD_ANSWER}" +
            $" where {FIELD_ID}=@{FIELD_ID}";
        private static readonly string REQ_DELETE =
            $"delete from {TABLE_NAME} where {FIELD_ID} = @{FIELD_ID}";
        private static readonly string REQ_DELETE_BY_QUESTION =
            $"delete from {TABLE_NAME} where {FIELD_ID_QUESTION} = @{FIELD_ID_QUESTION}";
        
        public static List<Solutions> Query()
        {
            List<Solutions> solutions = new List<Solutions>();
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    solutions.Add(new Solutions(reader));
                }

                return solutions;
            }
        }

        public static Solutions Get(int id)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_ID}", id);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    return new Solutions(reader);
                }

                return null;
            }
        }
        
        public static List<Solutions> GetByQuestions(int idQuestion)
        {
            List<Solutions> solutions = new List<Solutions>();
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET_BY_QUESTIONS;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTION}", idQuestion);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    solutions.Add(new Solutions(reader));
                }

                return solutions;
            }
        }
        
        public static Solutions Post(Solutions solution)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;
                command.Parameters.AddWithValue($"{FIELD_TEXT}", solution.text);
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTION}", solution.id_questions);
                command.Parameters.AddWithValue($"{FIELD_ANSWER}", solution.answer);

                solution.id = (int) command.ExecuteScalar();
            }

            return solution;
        }

        public static bool Update(Solutions solution)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;

                command.Parameters.AddWithValue($"{FIELD_ID}", solution.id);
                command.Parameters.AddWithValue($"{FIELD_TEXT}", solution.text);
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTION}", solution.id_questions);
                command.Parameters.AddWithValue($"{FIELD_ANSWER}", solution.answer);

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
        
        public static bool DeleteByQuestion(int id_question)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_BY_QUESTION;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTION}", id_question);

                return command.ExecuteNonQuery() >= 1;
            }
        }
    }
}