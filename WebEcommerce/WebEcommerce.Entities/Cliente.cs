using System.Collections.Generic;

namespace WebEcommerce.Entities;

public class Cliente
{
    public int ClienteId { get; set; }
    public string Nombre { get; set; }
    public string Apellidos { get; set; }
    public string Direccion { get; set; }
    public ICollection<ClienteArticulo>ClienteArticulos {get; set; }
}
