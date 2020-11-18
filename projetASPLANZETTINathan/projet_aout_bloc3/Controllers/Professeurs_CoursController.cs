using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Professeurs_CoursController : ControllerBase
    {
        
        [HttpGet]
        public ActionResult<IEnumerable<Professeurs_Cours>> Query()
        {
            return Ok(Professeurs_CoursDAO.Query());
        }

        [HttpGet]
        [Route("professeurs/{id_professeurs}")]
        public ActionResult<IEnumerable<Professeurs_Cours>> GetProfesseurs(int id_professeurs)
        {
            return Ok(Professeurs_CoursDAO.GetProfesseurs(id_professeurs));
        }
        
        [HttpGet]
        [Route("cours/{id_cours}")]
        public ActionResult<IEnumerable<Professeurs_Cours>> GetCours(int id_cours)
        {
            return Ok(Professeurs_CoursDAO.GetCours(id_cours));
        }
    }
}