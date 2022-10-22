using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class EstadoTicket
    {
        public EstadoTicket()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int IdEstadoTicket { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
