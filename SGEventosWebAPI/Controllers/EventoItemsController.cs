using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SGEventosWebAPI.Models;

namespace SGEventosWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventoItemsController : ControllerBase
    {
        private readonly SGEventosContext _context;

        public EventoItemsController(SGEventosContext context)
        {
            _context = context;
        }

        // GET: api/EventoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventoItem>>> GetEventoItems()
        {
            return await _context.EventoItems.ToListAsync();
        }

        // GET: api/EventoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventoItem>> GetEventoItem(long id)
        {
            var eventoItem = await _context.EventoItems.FindAsync(id);

            if (eventoItem == null)
            {
                return NotFound();
            }

            return eventoItem;
        }

        // PUT: api/EventoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventoItem(long id, EventoItem eventoItem)
        {
            if (id != eventoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(eventoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventoItemExists(id))
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

        // POST: api/EventoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EventoItem>> PostEventoItem(EventoItem eventoItem)
        {
            _context.EventoItems.Add(eventoItem);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetEventoItem", new { id = eventoItem.Id }, eventoItem);
            return CreatedAtAction(nameof(GetEventoItem), new { id = eventoItem.Id }, eventoItem);
        }

        // DELETE: api/EventoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EventoItem>> DeleteEventoItem(long id)
        {
            var eventoItem = await _context.EventoItems.FindAsync(id);
            if (eventoItem == null)
            {
                return NotFound();
            }

            _context.EventoItems.Remove(eventoItem);
            await _context.SaveChangesAsync();

            return eventoItem;
        }

        private bool EventoItemExists(long id)
        {
            return _context.EventoItems.Any(e => e.Id == id);
        }
    }
}
