using Microsoft.EntityFrameworkCore;
using StefaniniApi.Models;

namespace StefaniniApi.Data
{
  public class DataContext : DbContext
  {
    public DbSet<Pessoa> Pessoas { get; set; }
    public DbSet<Cidade> Cidades { get; set; }

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }
  }
}
