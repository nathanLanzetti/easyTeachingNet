using System;
using System.Data.SqlClient;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Professeurs_Cours
    {
        public int id_professeurs { get; set; }
        public int id_cours { get; set; }

        public Professeurs_Cours(int idProfesseurs, int idCours)
        {
            this.id_professeurs = idProfesseurs;
            this.id_cours = idCours;
        }

        public Professeurs_Cours()
        {
            
        }

        public Professeurs_Cours(SqlDataReader reader)
        {
            this.id_professeurs = Convert.ToInt32(reader[Professeurs_CoursDAO.FIELD_ID_PROFESSEURS].ToString());
            this.id_cours = Convert.ToInt32(reader[Professeurs_CoursDAO.FIELD_ID_COURS].ToString());
        }
    }
}