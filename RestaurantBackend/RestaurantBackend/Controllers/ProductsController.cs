using Core.Dtos;
using Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace RestaurantBackend.Controllers
{
    [ApiController]
    [Route("api/products")]
    [Authorize]
    public class ProductsController : ControllerBase
    {
        private ProductsService productService { get; set; }

        public ProductsController(ProductsService userService)
        {
            this.productService = userService;
        }

        [HttpPut("addProduct")]
        public IActionResult AddProduct(ProductDto product)
        {
            ClaimsPrincipal user = User;

            string userEmail = user.FindFirst("Email").Value;

            if (userEmail == "rares")
            {
                productService.AddProduct(product);

                return Ok();
            }

            return Unauthorized();
        }

        [HttpDelete("deleteProduct")]
        public IActionResult DeleteProduct(int productId)
        {
            ClaimsPrincipal user = User;

            string userEmail = user.FindFirst("Email").Value;

            if (userEmail == "rares")
            {
                productService.DeleteProduct(productId);

                return Ok();
            }

            return Unauthorized();
        }

        [HttpGet("getProducts")]
        public IActionResult GetAllProducts()
        {

            var response = productService.GetAllProducts();

            return Ok(response);
        }
    }
}
