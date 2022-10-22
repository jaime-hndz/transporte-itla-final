using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Horario
    {
        public Horario()
        {
            Viajes = new HashSet<Viaje>();
        }

        public int IdHorario { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Viaje> Viajes { get; set; }
    }
}
