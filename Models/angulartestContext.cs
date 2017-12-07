using Microsoft.EntityFrameworkCore;
 
namespace angulartest.Models
{
    public class angulartestContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public angulartestContext(DbContextOptions<angulartestContext> options) : base(options) { }
        public DbSet<User> authors { get; set; }

        public DbSet<Calendar> categories { get; set; }

        public DbSet<Monthly_goals> metas { get; set; }

        public DbSet<Agenda> quotes { get; set; }

    }
}