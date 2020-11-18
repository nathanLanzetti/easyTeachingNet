using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursCompletController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<CoursComplet>> Query()
        {
            return Ok(CoursCompletDAO.Query());
        }
        
        [HttpGet]
        [Route("{id}")]
        public ActionResult<CoursComplet> Get(int id)
        {
            List<CoursComplet> coursComplets = CoursCompletDAO.Query();
            CoursComplet courComplet = coursComplets.Find(cC => cC.cours.id == id);
            return Ok(courComplet);
        }
    }
}