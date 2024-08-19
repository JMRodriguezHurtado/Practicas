using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace WebEcommerce.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<WebEcommerceDbContext>
    {
        public WebEcommerceDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<WebEcommerceDbContext>();
            var connectionString = configuration.GetConnectionString("ECommerceDb");
            optionsBuilder.UseSqlServer(connectionString);

            return new WebEcommerceDbContext(optionsBuilder.Options);
        }
    }
}
