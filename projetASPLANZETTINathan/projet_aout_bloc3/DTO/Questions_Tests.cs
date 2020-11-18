using System;
using System.Data.SqlClient;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Questions_Tests
    {
        public int id_questions { get; set; }
        public int id_tests { get; set; }
        
        public Questions_Tests(){}

        public Questions_Tests(int idQuestions, int idTests)
        {
            this.id_questions = idQuestions;
            this.id_tests = idTests;
        }

        public Questions_Tests(SqlDataReader reader)
        {
            this.id_questions = Convert.ToInt32(reader[Questions_TestsDAO.FIELD_ID_QUESTIONS].ToString());
            this.id_tests = Convert.ToInt32(reader[Questions_TestsDAO.FIELD_ID_TESTS].ToString());
        }
    }
}