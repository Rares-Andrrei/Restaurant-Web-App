using DataLayer.Entities;

namespace DataLayer.Repositories
{
    public class ProductsRepository : RepositoryBase<Product>
    {
        private readonly AppDbContext dbContext;
        public ProductsRepository(AppDbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }
    }
}
