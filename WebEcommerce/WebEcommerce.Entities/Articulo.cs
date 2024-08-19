using System;

namespace WebEcommerce.Entities
{
    public class Articulo
    {
        public int ArticuloId { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        public int Stock { get; set; }
        public int TiendaId { get; set; }
        public Tienda Tienda { get; set; }
        public ICollection<ClienteArticulo> ClienteArticulos { get; set; }
    }
}
