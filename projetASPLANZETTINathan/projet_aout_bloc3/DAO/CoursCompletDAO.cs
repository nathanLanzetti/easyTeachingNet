using System.Collections.Generic;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class CoursCompletDAO
    {
        public static List<CoursComplet> Query()
        {
            List<CoursComplet> coursComplets = new List<CoursComplet>();
            List<Professeurs> profs = ProfesseursDAO.Query();
            List<Professeurs_Cours> profs_cours = Professeurs_CoursDAO.Query();
            List<Cours> cours = CoursDAO.Query();

            foreach (var c in cours)
            {
                List<Professeurs> profs_final = new List<Professeurs>();
                List<Professeurs_Cours> tmp_professeurs_cours = profs_cours.FindAll(pc => pc.id_cours == c.id);

                foreach (var tmpPc in tmp_professeurs_cours)
                {
                    profs_final.AddRange(profs.FindAll(prof => prof.id == tmpPc.id_professeurs));
                }
                coursComplets.Add(new CoursComplet(c, profs_final));
            }

            return coursComplets;
        }
    }
}