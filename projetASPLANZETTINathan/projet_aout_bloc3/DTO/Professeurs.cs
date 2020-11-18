using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Newtonsoft.Json;
using projet_aout_bloc3.DAO;

namespace projet_aout_bloc3.DTO
{
    public class Professeurs
    {
        public int id { get; set; }
        public string name { get; set; }
        public string firstname { get; set; }
        public string mail { get; set; }
        
        [JsonIgnore] 
        public string password { get; set; }
        
        //public int subjects { get; set; } faire la liste après voir dans une autre classe
        //public List<Choix.Choix> Choix { get; set; }

        public Professeurs(int id, string name, string firstname, string mail, string password)
        {
            this.id = id;
            this.name = name;
            this.firstname = firstname;
            this.mail = mail;
            this.password = password;
        }

        public Professeurs()
        {
            
        }

        public Professeurs(SqlDataReader reader)
        {
            this.id = Convert.ToInt32(reader[ProfesseursDAO.FIELD_ID].ToString());
            this.name = reader[ProfesseursDAO.FIELD_NAME].ToString();
            this.firstname = reader[ProfesseursDAO.FIELD_FIRSTNAME].ToString();
            this.mail = reader[ProfesseursDAO.FIELD_MAIL].ToString();
            this.password = reader[ProfesseursDAO.FIELD_PASSWORD].ToString();
        }
    }
}