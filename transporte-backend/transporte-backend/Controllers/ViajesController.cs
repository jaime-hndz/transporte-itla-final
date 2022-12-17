using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using transporte_backend.Models;

namespace transporte_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViajesController : ControllerBase
    {
        private readonly transporteContext _context;

        public ViajesController(transporteContext context)
        {
            _context = context;
        }

        // GET: api/Viajes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Viaje>>> GetViajes()
        {
            return await _context.Viajes
                .Include(u => u.IdCantidadCuposNavigation)
                .Include(u => u.IdHorarioNavigation)
                .Include(u => u.IdRutaNavigation)
                .ToListAsync();
        }

        [HttpGet("ByDate/{idEstudiante}")]
        public async Task<ActionResult<IEnumerable<Viaje>>> ByDate([FromQuery] DateTime fecha, string idEstudiante)
        {
            return await _context.Viajes
                .Where(u => u.Fecha == fecha)
                .Include(u => u.IdCantidadCuposNavigation)
                .Include(u => u.IdHorarioNavigation)
                .Include(u => u.IdRutaNavigation)
                .ToListAsync();
        }

        // GET: api/Viajes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Viaje>> GetViaje(int id)
        {
            var viaje = await _context.Viajes.FindAsync(id);

            if (viaje == null)
            {
                return NotFound();
            }

            return viaje;
        }

        // PUT: api/Viajes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutViaje(int id, Viaje viaje)
        {
            if (id != viaje.IdViaje)
            {
                return BadRequest();
            }

            _context.Entry(viaje).State = EntityState.Modified;

            var tickets = _context.Tickets
                .Where(u => u.IdViaje == id)
                .Include(u => u.IdEstudianteNavigation.IdUsuarioNavigation)
                .ToList();

            if (tickets.Count() > 0)
            {
                var estudiantes = new List<string>();

                foreach (var item in tickets)
                {
                    estudiantes.Add(item.IdEstudianteNavigation.IdUsuarioNavigation.Email);
                }

                NotificarUsuarios(estudiantes);
            }



            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ViajeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Viajes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Viaje>> PostViaje([FromQuery] Viaje viaje)
        {
            _context.Viajes.Add(viaje);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetViaje", new { id = viaje.IdViaje }, viaje);
        }

        [HttpPost("postviajes")]
        public async Task<ActionResult<Viaje>> PostViajes(Viaje[] viajes)
        {
            try
            {
                _context.Viajes.AddRange(viajes);
                await _context.SaveChangesAsync();

            }catch(DbException)
            {
                return BadRequest();
            }

            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteViaje(int id)
        {
            var viaje = await _context.Viajes.FindAsync(id);
            if (viaje == null)
            {
                return NotFound();
            }

            _context.Viajes.Remove(viaje);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("DeleteViajes")]
        public async Task<IActionResult> DeleteViajes(int[] viajes)
        {
            List<Viaje> tickets = new List<Viaje>();

            foreach (int id in viajes)
            {
                var  viaj = _context.Viajes.Where(v => v.IdViaje == id).FirstOrDefault();

                if (viaj == null)
                {
                    return NotFound();
                }

                tickets.Add(viaj);
            }

            _context.Viajes.RemoveRange(tickets);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ViajeExists(int id)
        {
            return _context.Viajes.Any(e => e.IdViaje == id);
        }

        private void NotificarUsuarios(List<string> userMails)
        {
            string MailOrigen = "transporteitla.noreply@gmail.com";
            string MailDestino = "jaime25112002@gmail.com";
            string Contra = "mqjnheevfhhpqyhj";

            MailMessage oMailMessage = new MailMessage();

            oMailMessage.Subject = "Notificación de modificación en viaje";
            oMailMessage.Body = @"
                 <div style=""color:black"">
                     <b> Se ha realizado una modificación en uno de los viajes que solicitaste en la plataforma de trasporte ITLA.</b>
                </div>
                <br />
                <a href='https://transporte.itla.edu.do/transporte/login'>Haz click aquí para ir a revisar tus solicitudes.</a> 
            ";
            oMailMessage.From = new MailAddress(MailOrigen);

            foreach (var item in userMails)
            {
                oMailMessage.To.Add(item);
            }

            oMailMessage.IsBodyHtml = true;

            SmtpClient oSmtpClient = new SmtpClient("smtp.gmail.com");
            oSmtpClient.EnableSsl = true;
            oSmtpClient.UseDefaultCredentials = false;
            oSmtpClient.Host = "smtp.gmail.com";

            oSmtpClient.Port = 587;
            oSmtpClient.Credentials = new System.Net.NetworkCredential(MailOrigen, Contra);

            try
            {
                 oSmtpClient.Send(oMailMessage);

            }
            catch (Exception e)
            {

                throw e;
            }

            oSmtpClient.Dispose();

        }
    }
}
