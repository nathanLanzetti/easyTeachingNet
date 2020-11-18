using System.Collections.Generic;
using System.Data.SqlClient;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class Questions_TestsDAO
    {
        private static readonly string TABLE_NAME = "questions_tests";
        
        public static readonly string FIELD_ID_QUESTIONS = "id_questions";
        public static readonly string FIELD_ID_TESTS = "id_tests";
        
        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID_QUESTIONS} = @{FIELD_ID_QUESTIONS} and {FIELD_ID_TESTS} = @{FIELD_ID_TESTS}";
        private static readonly string REQ_GET_BY_QUESTIONS = REQ_QUERY + $" where {FIELD_ID_QUESTIONS} = @{FIELD_ID_QUESTIONS}";
        private static readonly string REQ_GET_BY_TESTS = REQ_QUERY + $" where {FIELD_ID_TESTS} = @{FIELD_ID_TESTS}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_ID_QUESTIONS}, {FIELD_ID_TESTS}) " +
            $" values (@{FIELD_ID_QUESTIONS},@{FIELD_ID_TESTS})";
        private static readonly string REQ_DELETE =
            $"delete from {TABLE_NAME} where {FIELD_ID_QUESTIONS} = @{FIELD_ID_QUESTIONS} and {FIELD_ID_TESTS} = @{FIELD_ID_TESTS}";
        private static readonly string REQ_DELETE_BY_QUESTION =
            $"delete from {TABLE_NAME} where {FIELD_ID_QUESTIONS} = @{FIELD_ID_QUESTIONS}";
        private static readonly string REQ_DELETE_BY_TEST =
            $"delete from {TABLE_NAME} where {FIELD_ID_TESTS} = @{FIELD_ID_TESTS}";
        
        public static List<Questions_Tests> Query()
        {
            List<Questions_Tests> questionsTests = new List<Questions_Tests>();
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    questionsTests.Add(new Questions_Tests(reader));
                }

                return questionsTests;
            }
        }

        public static Questions_Tests Get(int id_questions, int id_tests)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTIONS}", id_questions);
                command.Parameters.AddWithValue($"{FIELD_ID_TESTS}", id_tests);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new Questions_Tests(reader);
                }

                return null;
            }
            
        }
        
        public static List<Questions_Tests> GetByQuestions(int id_questions)
        {
            List<Questions_Tests> questionsTests = new List<Questions_Tests>();
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET_BY_QUESTIONS;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTIONS}", id_questions);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    questionsTests.Add(new Questions_Tests(reader));
                }
                return questionsTests;
            }
        }
        
        public static List<Questions_Tests> GetByTests(int id_tests)
        {
            List<Questions_Tests> questionsTests = new List<Questions_Tests>();
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET_BY_TESTS;
                command.Parameters.AddWithValue($"{FIELD_ID_TESTS}", id_tests);

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    questionsTests.Add(new Questions_Tests(reader));
                }
                return questionsTests;
            }
        }

        public static Questions_Tests Post(Questions_Tests questionsTest)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTIONS}", questionsTest.id_questions);
                command.Parameters.AddWithValue($"{FIELD_ID_TESTS}", questionsTest.id_tests);

                command.ExecuteScalar();
            }
            return questionsTest;
        }

        public static bool Delete(int id_questions, int id_tests)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTIONS}", id_questions);
                command.Parameters.AddWithValue($"{FIELD_ID_TESTS}", id_tests);
                return command.ExecuteNonQuery() == 1;
            }
        }
        
        
        public static bool DeleteByQuestions(int id_questions)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_BY_QUESTION;
                command.Parameters.AddWithValue($"{FIELD_ID_QUESTIONS}", id_questions);
                return command.ExecuteNonQuery() >= 1;
            }
        }
        
        public static bool DeleteByTests(int id_tests)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE_BY_TEST;
                command.Parameters.AddWithValue($"{FIELD_ID_TESTS}", id_tests);
                return command.ExecuteNonQuery() >= 1;
            }
        }
    }
}