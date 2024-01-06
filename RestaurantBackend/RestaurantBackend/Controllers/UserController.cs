using Core.Dtos;
using Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace RestaurantBackend.Controllers
{
    [ApiController]
    [Route("api/users")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private UserService userService { get; set; }

        public UsersController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("validateToken")]
        public IActionResult Validate()
        {
            return Ok(new { Status = "success"});
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public IActionResult Register(RegisterDto payload)
        {
            if (userService.Register(payload))
            {
                return Ok(new { message = "Account succesfully created"});
            }

            return Ok(new { message = "Invalid registration data" });
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login(LoginDto payload)
        {
            var jwtToken = userService.Validate(payload);

            return Ok(new { token = jwtToken });
        }

        [HttpGet("getUsersInfo")]
        public IActionResult GetUsersInfo()
        {
            ClaimsPrincipal user = User;

            int userId = int.Parse(user.FindFirst("userId").Value);

            var response = userService.GetUserInfo(userId);

            return Ok(response);
        }
    }
}
