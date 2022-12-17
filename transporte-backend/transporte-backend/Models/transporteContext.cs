using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace transporte_backend.Models
{
    public partial class transporteContext : DbContext
    {
        public transporteContext()
        {
        }

        public transporteContext(DbContextOptions<transporteContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CantidadCupo> CantidadCupos { get; set; } = null!;
        public virtual DbSet<EstadoTicket> EstadoTickets { get; set; } = null!;
        public virtual DbSet<Estudiante> Estudiantes { get; set; } = null!;
        public virtual DbSet<Horario> Horarios { get; set; } = null!;
        public virtual DbSet<Ruta> Rutas { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;
        public virtual DbSet<Tipo> Tipos { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;
        public virtual DbSet<Viaje> Viajes { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("workstation id=transporte-itla.mssql.somee.com;packet size=4096;user id=jaime251102_SQLLogin_1;pwd=slhl2597v7;data source=transporte-itla.mssql.somee.com;persist security info=False;initial catalog=transporte-itla");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CantidadCupo>(entity =>
            {
                entity.HasKey(e => e.IdCantidadCupos)
                    .HasName("PK__cantidad__1B2062042BC6A021");

                entity.ToTable("cantidad_cupos");

                entity.Property(e => e.IdCantidadCupos).HasColumnName("id_cantidad_cupos");

                entity.Property(e => e.Cantidad).HasColumnName("cantidad");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<EstadoTicket>(entity =>
            {
                entity.HasKey(e => e.IdEstadoTicket)
                    .HasName("PK__estado_t__22B6B1A571A16F4A");

                entity.ToTable("estado_ticket");

                entity.Property(e => e.IdEstadoTicket).HasColumnName("id_estado_ticket");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Estudiante>(entity =>
            {
                entity.HasKey(e => e.IdEstudiante)
                    .HasName("PK__estudian__E0B2763C050B114F");

                entity.ToTable("estudiantes");

                entity.Property(e => e.IdEstudiante)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("id_estudiante");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Saldo)
                    .HasColumnType("money")
                    .HasColumnName("saldo");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Estudiantes)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usuario");
            });

            modelBuilder.Entity<Horario>(entity =>
            {
                entity.HasKey(e => e.IdHorario)
                    .HasName("PK__horarios__C5836D6952625461");

                entity.ToTable("horarios");

                entity.Property(e => e.IdHorario).HasColumnName("id_horario");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Ruta>(entity =>
            {
                entity.HasKey(e => e.IdRuta)
                    .HasName("PK__rutas__33C9344F312FA380");

                entity.ToTable("rutas");

                entity.Property(e => e.IdRuta).HasColumnName("id_ruta");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Precio)
                    .HasColumnType("money")
                    .HasColumnName("precio");

                entity.Property(e => e.VaItla).HasColumnName("va_itla");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.HasKey(e => e.IdTicket)
                    .HasName("PK__tickets__48C6F523A442D37E");

                entity.ToTable("tickets");

                entity.Property(e => e.IdTicket).HasColumnName("id_ticket");

                entity.Property(e => e.IdEstadoTicket).HasColumnName("id_estado_ticket");

                entity.Property(e => e.IdEstudiante)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("id_estudiante");

                entity.Property(e => e.IdViaje).HasColumnName("id_viaje");

                entity.HasOne(d => d.IdEstadoTicketNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdEstadoTicket)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_estado_ticket");

                entity.HasOne(d => d.IdEstudianteNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdEstudiante)
                    .HasConstraintName("fk_estudiante");

                entity.HasOne(d => d.IdViajeNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdViaje)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_viaje");
            });

            modelBuilder.Entity<Tipo>(entity =>
            {
                entity.HasKey(e => e.IdTipo)
                    .HasName("PK__tipos__CF901089E42C9068");

                entity.ToTable("tipos");

                entity.Property(e => e.IdTipo).HasColumnName("id_tipo");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuarios__4E3E04ADE0F9A430");

                entity.ToTable("usuarios");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("apellido");

                entity.Property(e => e.Contra)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("contra");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTipo).HasColumnName("id_tipo");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tipo");
            });

            modelBuilder.Entity<Viaje>(entity =>
            {
                entity.HasKey(e => e.IdViaje)
                    .HasName("PK__viajes__29535AC368B7C160");

                entity.ToTable("viajes");

                entity.Property(e => e.IdViaje).HasColumnName("id_viaje");

                entity.Property(e => e.Fecha)
                    .HasColumnType("date")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdCantidadCupos).HasColumnName("id_cantidad_cupos");

                entity.Property(e => e.IdHorario).HasColumnName("id_horario");

                entity.Property(e => e.IdRuta).HasColumnName("id_ruta");

                entity.HasOne(d => d.IdCantidadCuposNavigation)
                    .WithMany(p => p.Viajes)
                    .HasForeignKey(d => d.IdCantidadCupos)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_cantidad_cupos");

                entity.HasOne(d => d.IdHorarioNavigation)
                    .WithMany(p => p.Viajes)
                    .HasForeignKey(d => d.IdHorario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_horario");

                entity.HasOne(d => d.IdRutaNavigation)
                    .WithMany(p => p.Viajes)
                    .HasForeignKey(d => d.IdRuta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_ruta");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
