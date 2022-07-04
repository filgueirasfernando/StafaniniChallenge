using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace StefaniniApi.Models
{
  public class Pessoa
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int PessoaId { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(300, ErrorMessage = "Este campo deve conter entre 1 e 300 caracteres")]
    [MinLength(1, ErrorMessage = "Este campo deve conter entre 1 e 300 caracteres")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(11, ErrorMessage = "Este campo deve conter 11 caracteres")]
    [MinLength(11, ErrorMessage = "Este campo deve conter 11 caracteres")]
    public string CPF { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [Range(1, int.MaxValue, ErrorMessage = "Cidade inválida")]
    public int CidadeId { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [Range(1, Int16.MaxValue, ErrorMessage = "Idade inválida")]
    public int Idade { get; set; }

    [ForeignKey("CidadeId")]
    public virtual Cidade ?Cidade { get; set; }

  }
}
