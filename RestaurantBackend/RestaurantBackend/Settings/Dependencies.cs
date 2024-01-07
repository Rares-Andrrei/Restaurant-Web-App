using Core.Services;
using DataLayer;
using DataLayer.Repositories;

namespace RestaurantBackend.Settings
{
    public static class Dependencies
    {
        public static void Inject(WebApplicationBuilder applicationBuilder)
        {
            applicationBuilder.Services.AddControllers();
            applicationBuilder.Services.AddSwaggerGen();

            applicationBuilder.Services.AddDbContext<AppDbContext>();

            AddRepositories(applicationBuilder.Services);
            AddServices(applicationBuilder.Services);
        }

        private static void AddServices(IServiceCollection services)
        {
            services.AddScoped<UserService>();
            services.AddScoped<AuthorizationService>();
            services.AddScoped<ProductsService>();
        }

        private static void AddRepositories(IServiceCollection services)
        {
            services.AddScoped<UsersRepository>();
            services.AddScoped<ProductsRepository>();
            services.AddScoped<UnitOfWork>();
        }

    }
}
