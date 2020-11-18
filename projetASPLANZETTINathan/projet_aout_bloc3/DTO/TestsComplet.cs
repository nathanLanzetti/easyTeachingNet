using System.Collections.Generic;

namespace projet_aout_bloc3.DTO
{
    public class TestsComplet
    {
        public Tests test { get; set; }
        public List<QuestionsComplet> questionComplets { get; set; }

        public TestsComplet()
        {
            
        }

        public TestsComplet(Tests test, List<QuestionsComplet> questionComplets)
        {
            this.test = test;
            this.questionComplets = questionComplets;
        }
    }
}