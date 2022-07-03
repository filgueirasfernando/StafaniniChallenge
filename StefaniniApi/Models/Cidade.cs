using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StefaniniApi.Models
{
  public class Cidade
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int CidadeId { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(200, ErrorMessage = "Este campo deve conter entre 1 e 200 caracteres")]
    [MinLength(1, ErrorMessage = "Este campo deve conter entre 1 e 200 caracteres")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(2, ErrorMessage = "Este campo deve conter 2 caracteres")]
    [MinLength(2, ErrorMessage = "Este campo deve conter 2 caracteres")]
    public string UF { get; set; }
  }
}
