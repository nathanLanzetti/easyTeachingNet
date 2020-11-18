using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestsCompletController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<TestsComplet>> Query()
        {
            return Ok(TestsCompletDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<TestsComplet> Get(int id)
        {
            List<TestsComplet> testsComplets = TestsCompletDAO.Query();
            return Ok(testsComplets.Find(tc => tc.test.id == id));
        }
    }
}