using Core.Dtos;
using DataLayer;
using DataLayer.Entities;

namespace Core.Services
{
    public class UserService
    {
        private readonly UnitOfWork unitOfWork;
        private AuthorizationService authService { get; set; }
        public UserService(UnitOfWork unitOfWork, AuthorizationService authService)
        {
            this.unitOfWork = unitOfWork;
            this.authService = authService;
        }

        public bool Register(RegisterDto registerData)
        {
            if (registerData == null)
            {
                return false;
            }

            User user = unitOfWork.Users.GetByEmail(registerData.Email);

            if (user != null)
            {
                return false;
            }

            var hashedPassword = authService.HashPassword(registerData.Password);

            user = new User
            {
                Email = registerData.Email,
                PasswordHash = hashedPassword,
                FirstName = registerData.FirstName,
                LastName = registerData.LastName,
                PhoneNumber = registerData.PhoneNumber,
                Adress = registerData.Adress,
                DateOfBirth = DateTime.Parse(registerData.DateOfBirth)
            };       
            
            unitOfWork.Users.Insert(user);
            unitOfWork.SaveChanges();
            return true;
        }
        public string Validate(LoginDto payload)
        {
            var user = unitOfWork.Users.GetByEmail(payload.Email);
            if (user == null)
            {
                return null;
            }
            var passwordFine = authService.VerifyHashedPassword(user.PasswordHash, payload.Password);

            if (passwordFine)
            {
                return authService.GetToken(user);
            }
            else
            {
                return null;
            }
        }

        public object GetUserInfo(int userId)
        {
            User user = unitOfWork.Users.GetById(userId);
            return new UserInfoDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                BirthDay = user.DateOfBirth,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Adress = user.Adress
            };
        }
    }
}
