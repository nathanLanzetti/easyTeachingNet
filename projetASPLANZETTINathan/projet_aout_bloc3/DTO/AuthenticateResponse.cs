namespace projet_aout_bloc3.DTO
{
    public class AuthenticateResponse
    {
        public int id { get; set; }
        public string name { get; set; }
        public string firstame { get; set; }
        public string mail { get; set; }
        public string token { get; set; }


        public AuthenticateResponse(Professeurs professeurs, string token)
        {
            this.id = professeurs.id;
            this.name = professeurs.name;
            this.firstame = professeurs.firstname;
            this.mail = professeurs.mail;
            this.token = token;
        }
    }
}