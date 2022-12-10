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
    }
}
