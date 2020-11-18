using System;
using System.Data.SqlClient;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Questions
    {
        public int id { get; set; }
        public string name { get; set; }
        public int author { get; set; } // id_professeurs
        public int cours { get; set; } // id_cours

        public Questions(int id, string name, int author, int cours)
        {
            this.id = id;
            this.name = name;
            this.author = author;
            this.cours = cours;
        }

        public Questions()
        {
            
        }

        public Questions(SqlDataReader reader)
        {
            this.id = Convert.ToInt32(reader[QuestionsDAO.FIELD_ID].ToString());
            this.name = reader[QuestionsDAO.FIELD_NAME].ToString();
            this.author = Convert.ToInt32(reader[QuestionsDAO.FIELD_AUTHOR].ToString());
            this.cours = Convert.ToInt32(reader[QuestionsDAO.FIELD_COURS].ToString());
        }
    }
}