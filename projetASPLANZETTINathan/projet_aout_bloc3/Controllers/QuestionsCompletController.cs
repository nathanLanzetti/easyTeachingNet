using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsCompletController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<QuestionsComplet>> Query()
        {
            return Ok(QuestionsCompletDAO.Query());
        }
        
        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<QuestionsComplet> Get(int id)
        {
            List<QuestionsComplet> questionsComplets = QuestionsCompletDAO.Query();
            return Ok(questionsComplets.Find(qc => qc.question.id == id));
        }
    }
}