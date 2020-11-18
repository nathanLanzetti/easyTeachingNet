using System;
using System.Collections.Generic;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class ProfesseursCompletDAO
    {
        public static List<ProfesseursComplet> Query()
        {
            List<ProfesseursComplet> prof_complet = new List<ProfesseursComplet>();
            List<Professeurs> profs = ProfesseursDAO.Query();
            List<Professeurs_Cours> profs_cours = Professeurs_CoursDAO.Query();
            List<Cours> cours = CoursDAO.Query();
            List<Professeurs_Cours> tmp_profs_cours = new List<Professeurs_Cours>();

            foreach (var prof in profs)
            {
                List<Cours> cours_final = new List<Cours>();
                tmp_profs_cours = profs_cours.FindAll(prof_cours => prof_cours.id_professeurs == prof.id);
                
                foreach (var tmpPc in tmp_profs_cours)
                {
                    cours_final.AddRange(cours.FindAll(c => c.id == tmpPc.id_cours));
                }
                prof_complet.Add(new ProfesseursComplet(prof, cours_final));
            }

            return prof_complet;

        }
        
    }
}