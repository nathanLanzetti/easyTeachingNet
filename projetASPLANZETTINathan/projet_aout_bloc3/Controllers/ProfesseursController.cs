using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using projet_aout_bloc3.DAO;
using projet_aout_bloc3.DTO;
using projet_aout_bloc3.Helper;
using projet_aout_bloc3.Services;

namespace projet_aout_bloc3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfesseursController : ControllerBase
    {
        private IUserService _userService;

        public ProfesseursController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Mail or password is incorrect" });

            return Ok(response);
        }
        
        [Authorize]
        [HttpGet]
        [Route("token/authorized")]
        public IActionResult GetAll()
        {
            return Ok(ProfesseursDAO.Query());
        }
        
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Professeurs>> Query()
        {
            return Ok(ProfesseursDAO.Query());
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Professeurs> Get(int id)
        {
            return Ok(ProfesseursDAO.Get(id));
        }
    }
}