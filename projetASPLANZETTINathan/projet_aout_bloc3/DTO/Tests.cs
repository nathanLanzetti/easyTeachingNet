using System;
using System.Data.SqlClient;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Tests
    {
        public int id { get; set; }
        public string name { get; set; }
        public int author { get; set; }
        public int cours { get; set; }
        
        public Tests(){}

        public Tests(int id, string name, int author, int cours)
        {
            this.id = id;
            this.name = name;
            this.author = author;
            this.cours = cours;
        }

        public Tests(SqlDataReader reader)
        {
            this.id = Convert.ToInt32(reader[TestsDAO.FIELD_ID].ToString());
            this.name = reader[TestsDAO.FIELD_NAME].ToString();
            this.author = Convert.ToInt32(reader[TestsDAO.FIELD_AUTHOR].ToString());
            this.cours = Convert.ToInt32(reader[TestsDAO.FIELD_COURS].ToString());
        }
    }
}