using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Ruta
    {
        public Ruta()
        {
            Viajes = new HashSet<Viaje>();
        }

        public int IdRuta { get; set; }
        public string Descripcion { get; set; } = null!;
        public decimal Precio { get; set; }
        public bool VaItla { get; set; }

        public virtual ICollection<Viaje> Viajes { get; set; }
    }
}
