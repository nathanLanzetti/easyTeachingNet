using System;
using System.Data.SqlClient;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Cours
    {
        public int id { get; set; }
        public string nom_cours { get; set; }

        public Cours(int id, string nom_cours)
        {
            this.id = id;
            this.nom_cours = nom_cours;
        }

        public Cours()
        {
            
        }

        public Cours(SqlDataReader reader)
        {
            this.id = Convert.ToInt32(reader[CoursDAO.FIELD_ID].ToString());
            this.nom_cours = reader[CoursDAO.FIELD_NOM].ToString();
        }
    }
}