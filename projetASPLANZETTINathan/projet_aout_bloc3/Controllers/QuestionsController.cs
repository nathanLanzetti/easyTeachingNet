using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Questions>> Query()
        {
            return Ok(QuestionsDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Questions> Get(int id)
        {
            return Ok(QuestionsDAO.Get(id));
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Questions> Post([FromBody] Questions question)
        {
            return Ok(QuestionsDAO.Post(question));
        }

        [Authorize]
        [HttpPut]
        public ActionResult Update([FromBody] Questions question)
        {
            bool updated = QuestionsDAO.Update(question);
            if (updated)
            {
                return NoContent();
            }
            return NotFound("Question not found");
        }

        [Authorize]
        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            Questions_TestsDAO.DeleteByQuestions(id);
            SolutionsDAO.DeleteByQuestion(id);
            bool deleted = QuestionsDAO.Delete(id);
            
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Question not found");
        }
    }
}