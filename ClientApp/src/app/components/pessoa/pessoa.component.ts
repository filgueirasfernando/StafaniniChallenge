import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'
import { Pessoa } from 'src/app/Pessoa';
import { PessoaService } from 'src/app/pessoa.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  formulario: FormGroup;
  tituloFormulario: string;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pessoa';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      cidade: new FormControl(null),
      idade: new FormControl(null),
    });
  }

  EnviarFormulario(): void {
    const pessoa: Pessoa = this.formulario.value;

    this.pessoaService.SavePessoaAsync(pessoa).subscribe((resultado) => { alert ('Pessoa inserida com sucesso!'); });
  }
  

}
