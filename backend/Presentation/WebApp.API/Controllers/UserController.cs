using WebApp.Application.Interfaces;
using WebApp.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateUser([FromBody] AppUser user)
        {
            if (user == null)
            {
                return BadRequest("User data is null.");
            }

            bool userExists = await _userService.UsernameExistsAsync(user.Username);
            if (userExists)
            {
                return Conflict("Username is already taken.");
            }

            var createdUser = await _userService.CreateUserAsync(user);
            return Ok(createdUser);
        }

        [HttpGet("getAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);   
           
        
        }

        [HttpPost("bulkCreate")]
        public async Task<IActionResult> BulkCreateUsers([FromBody] IEnumerable<AppUser> users)
        {
            if (users == null || !users.Any())
            {
                return BadRequest("No users provided.");
            }

            var createdUsers = await _userService.CreateUsersAsync(users);
            return Ok(createdUsers);
        }

        [HttpGet("checkUsername/{username}")]
        public async Task<IActionResult> CheckUsernameExists(string username)
        {
            var exists = await _userService.UsernameExistsAsync(username);
            return Ok(exists);
        }

        [HttpGet("getUserByUsername/{username}")]
        public async Task<IActionResult> GetUserByUsername(string username)
        {
            var user = await _userService.GetUserByUsernameAsync(username);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            return Ok(user);
        }






    }
}


