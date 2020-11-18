using System.ComponentModel.DataAnnotations;

namespace projet_aout_bloc3.DTO
{
    public class AuthenticateRequest
    {
        [Required]
        public string mail { get; set; }

        [Required]
        public string password { get; set; }
    }
}