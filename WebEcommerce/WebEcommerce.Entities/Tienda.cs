using System.Collections.Generic;

namespace WebEcommerce.Entities
{
    public class Tienda
    {
        public int TiendaId { get; set; }
        public string Sucursal { get; set; }
        public string Direccion { get; set; }
        public ICollection<Articulo> Articulos { get; set; }
    }
}