using System.Collections.Generic;

namespace projet_aout_bloc3.DTO
{
    public class ProfesseursComplet
    {
        public Professeurs professeur { get; set; }
        public List<Cours> cours { get; set; }

        public ProfesseursComplet( Professeurs professeur, List<Cours> cours)
        {
            this.professeur = professeur;
            this.cours = cours;
        }
        
        public ProfesseursComplet()
        {
            
        }
    }
    
    
}