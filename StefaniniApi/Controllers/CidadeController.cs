using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StefaniniApi.Data;
using StefaniniApi.Models;

namespace StefaniniApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class CidadeController : ControllerBase
  {
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cidade>>> GetCidadesAsync([FromServices] DataContext dataContext)
    {
      if (ModelState.IsValid)
        return await dataContext.Cidades.ToListAsync();
      else
        return BadRequest(ModelState);
    }

    [HttpGet("{cidadeId}")]
    public async Task<ActionResult<Cidade>> GetCidadesByIdAsync([FromServices] DataContext dataContext, int cidadeId)
    {
      if (ModelState.IsValid)
        return await dataContext.Cidades.FirstOrDefaultAsync(x => x.CidadeId == cidadeId);
      else
        return BadRequest(ModelState);
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Cidade>> SaveCidadeAsync([FromServices] DataContext dataContext, Cidade cidade)
    {
      if (ModelState.IsValid)
      {
        dataContext.Cidades.AddAsync(cidade);
        await dataContext.SaveChangesAsync();
        return Ok(cidade);
      }
      else
        return BadRequest(ModelState);

    }


    [HttpPut]
    [Route("")]
    public async Task<ActionResult<Cidade>> UpdateCidadeAsync([FromServices] DataContext dataContext, Cidade cidade)
    {
      if (ModelState.IsValid)
      {
        dataContext.Cidades.Update(cidade);
        await dataContext.SaveChangesAsync();
        return Ok(cidade);
      }
      else
        return BadRequest(ModelState);

    }


    [HttpDelete]
    [Route("")]
    public async Task<ActionResult<Cidade>> DeleteCidadeAsync([FromServices] DataContext dataContext, int cidadeId)
    {
      if (ModelState.IsValid)
      {
        dataContext.Cidades.Remove(await dataContext.Cidades.FindAsync(cidadeId));
        await dataContext.SaveChangesAsync();
        return Ok();
      }
      else
        return BadRequest(ModelState);

    }
  }
}
