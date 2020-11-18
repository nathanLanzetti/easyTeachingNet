using System.Collections.Generic;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.DAO
{
    public class TestsCompletDAO
    {
        public static List<TestsComplet> Query()
        {
            List<TestsComplet> testsComplets = new List<TestsComplet>();
            List<Tests> tests = TestsDAO.Query();
            List<QuestionsComplet> questionsComplets = QuestionsCompletDAO.Query();
            foreach (var test in tests)
            {
                List<Questions_Tests> questionsTests = Questions_TestsDAO.GetByTests(test.id);
                List<QuestionsComplet> final_qc = new List<QuestionsComplet>();
                foreach (var questionsTest in questionsTests)
                {
                    final_qc.Add(questionsComplets.Find(qc => qc.question.id == questionsTest.id_questions));
                }
                testsComplets.Add(new TestsComplet(test, final_qc));
            }
            return testsComplets;
        }
    }
}