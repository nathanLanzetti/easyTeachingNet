using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestsController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Tests>> Query()
        {
            return Ok(TestsDAO.Query());
        }
        
        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Tests> Get(int id)
        {
            return Ok(TestsDAO.Get(id));
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Tests> Post([FromBody] Tests test)
        {
            return Ok(TestsDAO.Post(test));
        }

        [Authorize]
        [HttpPut]
        public ActionResult Update([FromBody] Tests test)
        {
            bool updated = TestsDAO.Update(test);
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
            Questions_TestsDAO.DeleteByTests(id);
            bool deleted = TestsDAO.Delete(id);
            if (deleted)
            {
                return NoContent();
            }
            return NotFound("Question not found");
        }
    }
}