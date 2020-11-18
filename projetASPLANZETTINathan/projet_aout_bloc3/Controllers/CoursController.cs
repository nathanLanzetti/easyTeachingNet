using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Cours>> Query()
        {
            return Ok(CoursDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Cours> Get(int id)
        {
            return Ok(CoursDAO.Get(id));
        }
    }
}