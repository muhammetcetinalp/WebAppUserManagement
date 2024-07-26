using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Domain;
using WebApp.Domain.Entities;

namespace WebApp.Application.Interfaces
{
    public interface IUserService
    {
        Task<AppUser> CreateUserAsync(AppUser user);

        Task<IEnumerable<AppUser>> GetAllUsersAsync();

        Task<IEnumerable<AppUser>> CreateUsersAsync(IEnumerable<AppUser> users);
        Task<bool> UsernameExistsAsync(string username);

        Task<AppUser> GetUserByUsernameAsync(string username);


    }

}
