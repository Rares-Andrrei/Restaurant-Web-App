using Core.Dtos;
using DataLayer;
using DataLayer.Entities;

namespace Core.Services
{
    public class ProductsService
    {
        private readonly UnitOfWork unitOfWork;
        public ProductsService(UnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public void AddProduct(ProductDto product)
        {
            if (product == null)
            {
                return;
            }

            unitOfWork.Products.Insert(
                new Product
                {
                    Name = product.Name,
                    Price = product.Price,
                    Description = product.Description,
                    ImageUrl = product.ImageUrl,
                    Grams = product.Grams,
                    Category = product.Category
                });

            unitOfWork.SaveChanges();
        }

        public void DeleteProduct(int productId)
        {
            var product = unitOfWork.Products.GetById(productId);

            if (product == null)
            {
                return;
            }

            unitOfWork.Products.Remove(product);

            unitOfWork.SaveChanges();
        }

        public List<Product> GetAllProducts()
        {
            var products = unitOfWork.Products.GetAll();
            return products;
        }
    }
}
