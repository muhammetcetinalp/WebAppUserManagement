using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Domain.Entities
{
    [Table("AppUsers")]

    public class AppUser
    {

        public int ID { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }

        public Boolean IsAdmin { get; set; } = false;
    }
}
