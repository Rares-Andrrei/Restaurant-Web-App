namespace DataLayer.Entities
{
    public class User : BaseEntity
    { 
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string FirstName { get; set; }
        public string  LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
