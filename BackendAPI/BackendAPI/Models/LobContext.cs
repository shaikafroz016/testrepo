using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Models
{
    public class LobContext : DbContext
    {
        public LobContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<HomeModel> HomeModels { get; set; }
        public DbSet<LobCategory> LobCategories { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<policyline> policylines { get; set; }
    }
}
