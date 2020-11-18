using System.Collections.Generic;

namespace projet_aout_bloc3.DTO
{
    public class CoursComplet
    {
        public Cours cours { get; set; }
        public List<Professeurs> professeurs { get; set; }
        
        public CoursComplet(Cours cours, List<Professeurs> professeurs)
        {
            this.cours = cours;
            this.professeurs = professeurs;
        }
        
        public CoursComplet()
        {
            
        }

    }
}