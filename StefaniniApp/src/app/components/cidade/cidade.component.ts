import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'
import { Cidade } from 'src/app/Cidade';
import { CidadeService } from 'src/app/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  formulario: FormGroup;
  tituloFormulario: string;

  visibilidadeTabela: boolean = true;
  visibilidadeForm: boolean = true;
  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.cidadeService.GetCidadesAsync().subscribe((resultado) => {this.cidades = resultado});
  }

  ExibirFormularioCadastro(){
    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.tituloFormulario = 'Nova Cidade';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      uf: new FormControl(null),
    });
  }


  ExibirFormAtualizacao(cidadeId: any) : void {
    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.cidadeService.GetCidadesByIdAsync(cidadeId).subscribe((resultado) => 
    {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        cidadeId: new FormControl(resultado.cidadeId),
        nome: new FormControl(resultado.nome),
        uf: new FormControl(resultado.uf)
    })
  })}


  EnviarFormulario(): void {
    const cidade: Cidade = this.formulario.value;

    if(cidade.cidadeId > 0)
    this.cidadeService.UpdateCidadeAsync(cidade).subscribe((resultado) => 
    {
      alert ('Cidade atualizada com sucesso!');
      this.visibilidadeTabela = true;
      this.visibilidadeForm = false;
      this.cidadeService.GetCidadesAsync().subscribe((registros) => {this.cidades = registros})
    });
    else
    this.cidadeService.SaveCidadeAsync(cidade).subscribe((resultado) => 
    { 
      alert ('Cidade inserida com sucesso!');
      this.visibilidadeTabela = true;
      this.visibilidadeForm = false;
      this.cidadeService.GetCidadesAsync().subscribe((registros) => {this.cidades = registros})
    },
    (error) => {alert (JSON.stringify(error.error.errors,null,2))});
  }

  ExcluirCidade(cidadeId: number) : void{
    this.cidadeService.DeleteCidadeAsync(cidadeId).subscribe((resultado) => 
    {
      alert ('Cidade excluida com sucesso!');
      this.cidadeService.GetCidadesAsync().subscribe((registros) => {this.cidades = registros});
    },
    (error) => {alert (JSON.stringify(error.error.errors,null,2))});
  }

  Voltar(){
    this.visibilidadeTabela = true;
    this.visibilidadeForm = false;
  }
}
