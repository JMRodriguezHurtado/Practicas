using Microsoft.EntityFrameworkCore;
using WebEcommerce.Entities;

namespace WebEcommerce.Data
{
    public class WebEcommerceDbContext : DbContext
    {
        public WebEcommerceDbContext(DbContextOptions<WebEcommerceDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Tienda> Tiendas { get; set; }
        public DbSet<Articulo> Articulos { get; set; }
        public DbSet<ClienteArticulo> ClienteArticulos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClienteArticulo>()
                .HasKey(ca => new { ca.ClienteId, ca.ArticuloId });

            modelBuilder.Entity<ClienteArticulo>()
                .HasOne(ca => ca.Cliente)
                .WithMany(c => c.ClienteArticulos)
                .HasForeignKey(ca => ca.ClienteId);

            modelBuilder.Entity<ClienteArticulo>()
                .HasOne(ca => ca.Articulo)
                .WithMany(a => a.ClienteArticulos)
                .HasForeignKey(ca => ca.ArticuloId);    

            modelBuilder.Entity<Articulo>()
                .Property(a => a.Precio)
                .HasColumnType("decimal(18,2)");

            base.OnModelCreating(modelBuilder);
        }
    }
}
