using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class CantidadCupo
    {
        public CantidadCupo()
        {
            Viajes = new HashSet<Viaje>();
        }

        public int IdCantidadCupos { get; set; }
        public string Descripcion { get; set; } = null!;
        public int Cantidad { get; set; }

        public virtual ICollection<Viaje> Viajes { get; set; }
    }
}
