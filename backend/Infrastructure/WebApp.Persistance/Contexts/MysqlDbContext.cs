using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using WebApp.Domain.Entities;

namespace WebApp.Persistance.Contexts
{
    public class MySQLDbContext : DbContext
    {
        public MySQLDbContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> AppUsers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>()
                .Property(u => u.ID)
                .ValueGeneratedOnAdd();
        }
    }
}
