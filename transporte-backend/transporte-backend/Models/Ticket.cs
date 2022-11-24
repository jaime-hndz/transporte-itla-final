using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Ticket
    {
        public int IdTicket { get; set; }
        public string? IdEstudiante { get; set; }
        public int IdViaje { get; set; }
        public int IdEstadoTicket { get; set; } = 1;

        public virtual EstadoTicket? IdEstadoTicketNavigation { get; set; } = null!;
        public virtual Estudiante? IdEstudianteNavigation { get; set; }
        public virtual Viaje? IdViajeNavigation { get; set; } = null!;
    }
}
