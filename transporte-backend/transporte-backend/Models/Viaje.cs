using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Viaje
    {
        public Viaje()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int IdViaje { get; set; }
        public DateTime Fecha { get; set; }
        public int IdRuta { get; set; }
        public int IdHorario { get; set; }
        public int IdCantidadCupos { get; set; }

        public virtual CantidadCupo? IdCantidadCuposNavigation { get; set; } = null!;
        public virtual Horario? IdHorarioNavigation { get; set; } = null!;
        public virtual Ruta? IdRutaNavigation { get; set; } = null!;
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
