using Microsoft.EntityFrameworkCore;

namespace SGEventosWebAPI.Models
{
    public class SGEventosContext : DbContext
    {
        public SGEventosContext(DbContextOptions<SGEventosContext> options) 
            : base(options)
        { 
        }

        public DbSet<EventoItem> EventoItems { get; set; }
    }
}