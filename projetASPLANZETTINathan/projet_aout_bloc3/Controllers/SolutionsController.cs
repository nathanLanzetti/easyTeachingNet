using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SolutionsController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Solutions>> Query()
        {
            return Ok(SolutionsDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Solutions> Get(int id)
        {
            return Ok(SolutionsDAO.Get(id));
        }
        
        [Authorize]
        [HttpGet]
        [Route("byquestion/{idQuestion}")]
        public ActionResult<Solutions> GetByQuestions(int idQuestion)
        {
            return Ok(SolutionsDAO.GetByQuestions(idQuestion));
        }
        
        [Authorize]
        [HttpPost]
        public ActionResult<Solutions> Post([FromBody] Solutions solution)
        {
            return Ok(SolutionsDAO.Post(solution));
        }

        [Authorize]
        [HttpPut]
        public ActionResult Update([FromBody] Solutions solution)
        {
            bool updated = SolutionsDAO.Update(solution);
            if (updated)
            {
                return NoContent();
            }
            return NotFound("Solution not found");
        }

        [Authorize]
        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            bool deleted = SolutionsDAO.Delete(id);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Solution not found");
        }
        
        [Authorize]
        [HttpDelete]
        [Route("byquestion/{id_question}")]
        public ActionResult DeleteByQuestion(int id_question)
        {
            bool deleted = SolutionsDAO.Delete(id_question);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Solution(s) not found");
        }
    }
}