using System.Collections.Generic;

namespace projet_aout_bloc3.DTO
{
    public class QuestionsComplet
    {
        public Questions question { get; set; }
        public Professeurs professeur { get; set; }
        public Cours cours { get; set; }
        public List<Solutions> solutions { get; set; }
        
        public QuestionsComplet(){}

        public QuestionsComplet(Questions question, Professeurs professeur, Cours cours, List<Solutions> solutions)
        {
            this.question = question;
            this.professeur = professeur;
            this.cours = cours;
            this.solutions = solutions;
        }
        
    }
}