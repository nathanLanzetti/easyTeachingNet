using System;
using System.Data.SqlClient;
using System.Net.Mime;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Solutions
    {
        public int id { get; set; }
        public string text { get; set; }
        public int id_questions { get; set; }
        public int answer { get; set; }

        public Solutions()
        {
            
        }

        public Solutions(int id, string text, int id_questions, int answer)
        {
            this.id = id;
            this.text = text;
            this.id_questions = id_questions;
            this.answer = answer;
        }

        public Solutions(SqlDataReader reader)
        {
            this.id = Convert.ToInt32(reader[SolutionsDAO.FIELD_ID].ToString());
            this.text = reader[SolutionsDAO.FIELD_TEXT].ToString();
            this.id_questions = Convert.ToInt32(reader[SolutionsDAO.FIELD_ID_QUESTION].ToString());
            this.answer = Convert.ToInt32(reader[SolutionsDAO.FIELD_ANSWER].ToString());
        }
    }
}