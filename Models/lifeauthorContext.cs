using Microsoft.EntityFrameworkCore;
 
namespace lifeauthor.Models
{
    public class lifeauthorContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public lifeauthorContext(DbContextOptions<lifeauthorContext> options) : base(options) { }
        public DbSet<Users> users { get; set; }

        public DbSet<Calendar> calendar { get; set; }

        public DbSet<Agenda> agenda { get; set; }

    }
}