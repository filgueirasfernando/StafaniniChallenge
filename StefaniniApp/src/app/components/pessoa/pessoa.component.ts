import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'
import { Cidade } from 'src/app/Cidade';
import { Pessoa } from 'src/app/Pessoa';
import { PessoaService } from 'src/app/pessoa.service';
import { CidadeService } from 'src/app/cidade.service';
import { Observable } from 'rxjs';
import { FormatWidth } from '@angular/common';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  formulario: FormGroup;
  tituloFormulario: string;
  cidades: Cidade[];
  pessoas: Pessoa[];

  visibilidadeTabela: boolean = true;
  visibilidadeForm: boolean = true;


  constructor(private pessoaService: PessoaService, private cidadeService: CidadeService) { }

  ngOnInit(): void {
      this.pessoaService.GetPessoasAsync().subscribe((resultado) => {this.pessoas = resultado});
      this.cidadeService.GetCidadesAsync().subscribe(cidades => this.cidades = cidades);
  }

  ExibirFormularioCadastro(){
    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.tituloFormulario = 'Nova Pessoa';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      cidadeId: new FormControl(null),
      idade: new FormControl(null),
    });
  }

  ExibirFormAtualizacao(pessoaId: number) : void {
    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.pessoaService.GetPessoasByIdAsync(pessoaId).subscribe((resultado) => 
    {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        pessoaId: new FormControl(resultado.pessoaId),
        nome: new FormControl(resultado.nome),
        cpf: new FormControl(resultado.cpf),
        cidadeId: new FormControl(resultado.cidadeId),
        idade: new FormControl(resultado.idade),
    })
  })
  }

  EnviarFormulario(): void {
    const pessoa: Pessoa = this.formulario.value;

    if(pessoa.pessoaId > 0)
    this.pessoaService.UpdatePessoaAsync(pessoa).subscribe((resultado) => 
    {
      alert ('Pessoa atualizada com sucesso!');
      this.visibilidadeTabela = true;
      this.visibilidadeForm = false;
      this.pessoaService.GetPessoasAsync().subscribe((registros) => {this.pessoas = registros})
    });
    else
    this.pessoaService.SavePessoaAsync(pessoa).subscribe((resultado) => 
    { 
      alert ('Pessoa inserida com sucesso!');
      this.visibilidadeTabela = true;
      this.visibilidadeForm = false;
      this.pessoaService.GetPessoasAsync().subscribe((registros) => {this.pessoas = registros})
    },
                                                      
  (error) => {alert (JSON.stringify(error.error.errors,null,2))});
}
ExcluirPessoa(pessoaId: number) : void{
  this.pessoaService.DeletePessoaAsync(pessoaId).subscribe((resultado) => 
  {
    alert ('Pessoa excluida com sucesso!');
    this.pessoaService.GetPessoasAsync().subscribe((registros) => {this.pessoas = registros})
  },
  (error) => {alert (JSON.stringify(error.error.errors,null,2))
  });
}

Voltar(){
  this.visibilidadeTabela = true;
  this.visibilidadeForm = false;
}

}
