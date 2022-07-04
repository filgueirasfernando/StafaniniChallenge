using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StefaniniApi.Data;
using StefaniniApi.Models;

namespace StefaniniApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class PessoaController : ControllerBase
  {
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoasAsync([FromServices] DataContext dataContext)
    {
      if (ModelState.IsValid)
        return await dataContext.Pessoas.ToListAsync();
      else
        return BadRequest(ModelState);
    }

    [HttpGet("{pessoaId}")]
    public async Task<ActionResult<Pessoa>> GetPessoasByIdAsync([FromServices] DataContext dataContext, int pessoaId)
    {
      if (ModelState.IsValid)
        return await dataContext.Pessoas.FirstOrDefaultAsync(x => x.PessoaId == pessoaId);
      else
        return BadRequest(ModelState);
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Pessoa>> SavePessoaAsync([FromServices] DataContext dataContext, Pessoa Pessoa)
    {
      if (ModelState.IsValid)
      {
        dataContext.Pessoas.AddAsync(Pessoa);
        await dataContext.SaveChangesAsync();
        return Ok(Pessoa);
      }
      else
        return BadRequest(ModelState);

    }


    [HttpPut]
    [Route("")]
    public async Task<ActionResult<Pessoa>> UpdatePessoaAsync([FromServices] DataContext dataContext, Pessoa Pessoa)
    {
      if (ModelState.IsValid)
      {
        dataContext.Pessoas.Update(Pessoa);
        await dataContext.SaveChangesAsync();
        return Ok(Pessoa);
      }
      else
        return BadRequest(ModelState);

    }


    [HttpDelete]
    [Route("")]
    public async Task<ActionResult<Pessoa>> DeletePessoaAsync([FromServices] DataContext dataContext, int pessoaId)
    {
      if (ModelState.IsValid)
      {
        dataContext.Pessoas.Remove(await dataContext.Pessoas.FindAsync(pessoaId));
        await dataContext.SaveChangesAsync();
        return Ok();
      }
      else
        return BadRequest(ModelState);

    }
  }
}
