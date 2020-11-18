using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfesseursCompletController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<ProfesseursComplet>> Query()
        {
            return Ok(ProfesseursCompletDAO.Query());
        }
        
        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<ProfesseursComplet> Get(int id)
        {
            List<ProfesseursComplet> professeursComplets = ProfesseursCompletDAO.Query();
            ProfesseursComplet professeursComplet = professeursComplets.Find(pc => pc.professeur.id == id);
            return Ok(professeursComplet);
        }
    }
}