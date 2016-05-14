using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Cors;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomAudiences_Back_End.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        // GET: api/Token/
        [HttpGet]
        public string  Get()
        {
            return "hola soy el token";
        }
        // POST api/Token
        [HttpPost("")]
        public string Post([FromBody]string accessToken)
        {
            //var jData = Json.d;
            var token = accessToken;
            return token;
        }
    }

}
