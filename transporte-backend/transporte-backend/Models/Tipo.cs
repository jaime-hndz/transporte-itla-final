using System;
using System.Collections.Generic;

namespace transporte_backend.Models
{
    public partial class Tipo
    {
        public Tipo()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipo { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
