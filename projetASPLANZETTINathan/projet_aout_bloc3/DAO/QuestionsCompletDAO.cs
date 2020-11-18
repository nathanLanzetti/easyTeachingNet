using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class QuestionsCompletDAO
    {
        public static List<QuestionsComplet> Query()
        {
            List<QuestionsComplet> questionsComplets = new List<QuestionsComplet>();
            List<Questions> questions = QuestionsDAO.Query();
            foreach (var q in questions)
            {
                questionsComplets.Add(new QuestionsComplet(q, ProfesseursDAO.Get(q.author), CoursDAO.Get(q.cours), SolutionsDAO.GetByQuestions(q.id)));
            }

            return questionsComplets;
        }
    }
}