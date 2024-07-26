using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Application.Interfaces;
using WebApp.Domain;
using WebApp.Domain.Entities;
using WebApp.Persistance.Contexts;

namespace WebApp.Persistance.Services
{
    public class UserService : IUserService
    {
        private readonly MySQLDbContext _context;

        public UserService(MySQLDbContext context)
        {
            _context = context;
        }

        public async Task<AppUser> CreateUserAsync(AppUser user)
        {
            await _context.AppUsers.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<IEnumerable<AppUser>> GetAllUsersAsync()
        {
            return await _context.AppUsers.ToListAsync();
        }
        public async Task<IEnumerable<AppUser>> CreateUsersAsync(IEnumerable<AppUser> users)
        {
            await _context.AppUsers.AddRangeAsync(users);
            await _context.SaveChangesAsync();
            return users;
        }
        public async Task<bool> UsernameExistsAsync(string username)
        {
            return await _context.AppUsers.AnyAsync(u => u.Username == username);
        }
        public async Task<AppUser> GetUserByUsernameAsync(string username)
        {
            return await _context.AppUsers.FirstOrDefaultAsync(u => u.Username == username);
        }




    }
}
