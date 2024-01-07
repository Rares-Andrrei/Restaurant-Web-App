﻿using DataLayer.Repositories;

namespace DataLayer
{
    public class UnitOfWork
    {
        private readonly AppDbContext _dbContext;

        public UsersRepository Users { get; }
        public ProductsRepository Products { get; }

        public UnitOfWork(AppDbContext context,  UsersRepository usersRepository, ProductsRepository productsRepository)
        {
            _dbContext = context;
            Users = usersRepository;
            Products = productsRepository;
        }
        public void SaveChanges()
        {
            try
            {
                _dbContext.SaveChanges();
            }
            catch (Exception exception)
            {
                var errorMessage = "Error when saving to the database: "
                    + $"{exception.Message}\n\n"
                    + $"{exception.InnerException}\n\n"
                    + $"{exception.StackTrace}\n\n";

                Console.WriteLine(errorMessage);
            }
        }
    }
}
