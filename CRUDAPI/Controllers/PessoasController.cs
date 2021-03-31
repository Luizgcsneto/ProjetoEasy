using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync()
        {
            return await _contexto.Pessoas.ToListAsync();
        }

        [HttpGet("{PessoaID}")]
         public async Task<ActionResult<Pessoa>> PegarPessoaPeloIDAsync(int pessoaID)
         {
            Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaID);

            if(pessoa == null)
                return NotFound();

             return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> SalvarPessoaAsync(Pessoa pessoa)
        {
            await _contexto.Pessoas.AddAsync(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarPessoaAsync(Pessoa pessoa)
        {
            _contexto.Pessoas.Update(pessoa);

            await _contexto.SaveChangesAsync();

            return Ok();

        }

        [HttpDelete("{pessoaID}")]
        public async Task<ActionResult> ExcluirPessoaAsync(int pessoaID)
        {
              Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaID);
              if(pessoa == null)
                return NotFound();


            _contexto.Remove(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }
    }
}