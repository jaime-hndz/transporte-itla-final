using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Estudiantes = new HashSet<Estudiante>();
        }

        public int IdUsuario { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public int IdTipo { get; set; }
        public string Contra { get; set; } = null!;
        public string Email { get; set; } = null!;

        public virtual Tipo IdTipoNavigation { get; set; } = null!;
        public virtual ICollection<Estudiante> Estudiantes { get; set; }
    }
}
