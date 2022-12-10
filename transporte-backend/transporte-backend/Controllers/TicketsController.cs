using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using transporte_backend.Models;

namespace transporte_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly transporteContext _context;

        public TicketsController(transporteContext context)
        {
            _context = context;
        }

        // GET: api/Tickets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
        {
            return await _context.Tickets.ToListAsync();
        }

        // GET: api/Tickets
        [HttpGet("ticketsPorPagar")]
        public async Task<ActionResult<IEnumerable<Ticket>>> TicketsPorPagar([FromQuery] string id)
        {
            return await _context.Tickets
                .Where(u => u.IdEstudiante == id)
                .Where(u => u.IdEstadoTicket == 1)
                .Include(u => u.IdViajeNavigation.IdHorarioNavigation)
                .Include(u => u.IdViajeNavigation.IdRutaNavigation)
                .Include(u => u.IdEstadoTicketNavigation)
                .ToListAsync();
        }

        [HttpGet("ticketsPagos")]
        public async Task<ActionResult<IEnumerable<Ticket>>> TicketsPagos([FromQuery] string id)
        {
            return await _context.Tickets
                .Where(u => u.IdEstudiante == id)
                .Where(u => u.IdEstadoTicket == 2)
                .Include(u => u.IdViajeNavigation.IdHorarioNavigation)
                .Include(u => u.IdViajeNavigation.IdRutaNavigation)
                .Include(u => u.IdEstadoTicketNavigation)
                .ToListAsync();
        }

        // GET: api/Tickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);

            if (ticket == null)
            {
                return NotFound();
            }

            return ticket;
        }

        [HttpGet("check/{idViaje}/{idEstudiante}")]
        public ActionResult<Boolean> Check(int idViaje, string idEstudiante)
        {
            bool check = false;
            int count = _context.Tickets.Where(t => t.IdViaje == idViaje && t.IdEstudiante == idEstudiante && t.IdEstadoTicket == 2).Count();

            if (count > 0)
            {
                check = true;
            }

            return check;
        }

        // PUT: api/Tickets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicket(int id, [FromBody] Ticket ticket)
        {
            if (id != ticket.IdTicket)
            {
                return BadRequest();
            }

            _context.Entry(ticket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketExists(id))
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

        [HttpPut("pagartickets/{id}/{total}")]
        public async Task<IActionResult> PagarTickets([FromBody] IEnumerable<Ticket> tickets, string id, int total)
        {

            _context.Tickets.UpdateRange(tickets);
            var estudiante = _context.Estudiantes.Where(u => u.IdEstudiante == id).FirstOrDefault();
            
            if (estudiante == null)
            {
                return NotFound();
            }

            estudiante.Saldo = estudiante.Saldo - total;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(estudiante.Saldo);
        }

        // POST: api/Tickets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ticket>> PostTicket(Ticket ticket)
        {
            if (ticket.IdViajeNavigation.Tickets.Count() < ticket.IdViajeNavigation.IdCantidadCuposNavigation.Cantidad)
            {
                _context.Tickets.Add(ticket);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetTicket", new { id = ticket.IdTicket }, ticket);
            }
            else
            {
                return BadRequest();
            }
            
        }

        [HttpPost("posttickets")]
        public async Task<ActionResult<Ticket>> PostTickets([FromQuery] int[] viajes, [FromQuery]string id)
        {
            List<Ticket> tickets = new List<Ticket>();
            foreach (var item in viajes)
            {
                int ts = _context.Tickets.Where(t => t.IdViaje == item && t.IdEstudiante == id).Count();
                if (ts > 0)
                {
                    return BadRequest("Ya habias reservado el ticket "+item);
                }
                Ticket ticket = new Ticket
                {
                    IdTicket = 0,
                    IdEstudiante = id,
                    IdViaje = item,
                    IdEstadoTicket = 1,
                };
                tickets.Add(ticket);
            }

            try
            {
                _context.Tickets.AddRange(tickets);
                await _context.SaveChangesAsync();

            }catch (DbException)
            {
                return BadRequest();
            }
            return Ok();

        }

        // DELETE: api/Tickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicket(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);
            if (ticket == null)
            {
                return NotFound();
            }

            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("check")]
        public ActionResult<bool> CheckTicket([FromQuery] int idViaje,[FromQuery] string idEstudiante)
        {
            return _context.Tickets.Any(e => e.IdViaje == idViaje && e.IdEstudiante == idEstudiante && e.IdEstadoTicket == 2);
        }


        private bool TicketExists(int id)
        {
            return _context.Tickets.Any(e => e.IdTicket == id);
        }
    }
}
