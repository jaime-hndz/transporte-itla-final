using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Estudiante
    {
        public Estudiante()
        {
            Tickets = new HashSet<Ticket>();
        }

        public string IdEstudiante { get; set; } = null!;
        public int IdUsuario { get; set; }
        public decimal Saldo { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
