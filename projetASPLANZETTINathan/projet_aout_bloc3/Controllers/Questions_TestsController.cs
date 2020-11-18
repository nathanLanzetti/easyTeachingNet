using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Questions_TestsController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Questions_Tests>> Query()
        {
            return Ok(Questions_TestsDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id_questions}/{id_tests}")]
        public ActionResult<Questions_Tests> Query(int id_questions, int id_tests)
        {
            return Ok(Questions_TestsDAO.Get(id_questions, id_tests));
        }
        
        [Authorize]
        [HttpGet]
        [Route("byquestion/{id_question}")]
        public ActionResult<Questions_Tests> GetByQuestion(int id_question)
        {
            return Ok(Questions_TestsDAO.GetByQuestions(id_question));
        }
        
        [Authorize]
        [HttpGet]
        [Route("bytest/{id_test}")]
        public ActionResult<Questions_Tests> GetByTest(int id_test)
        {
            return Ok(Questions_TestsDAO.GetByTests(id_test));
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Questions_Tests> Post([FromBody] Questions_Tests questionsTests)
        {
            return Ok(Questions_TestsDAO.Post(questionsTests));
        }
        
        [Authorize]
        [HttpDelete]
        [Route("{id_questions}/{id_tests}")]
        public ActionResult Delete(int id_questions, int id_tests)
        {
            bool deleted = Questions_TestsDAO.Delete(id_questions, id_tests);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Entry not found");
        }
        
        [Authorize]
        [HttpDelete]
        [Route("byquestion/{id_questions}")]
        public ActionResult DeleteByQuestions(int id_questions)
        {
            bool deleted = Questions_TestsDAO.DeleteByQuestions(id_questions);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Entry not found");
        }
        
        [Authorize]
        [HttpDelete]
        [Route("bytest/{id_test}")]
        public ActionResult DeleteByTests(int id_test)
        {
            bool deleted = Questions_TestsDAO.DeleteByTests(id_test);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Entry not found");
        }
        
    }
}