import { Cidade } from "./Cidade";

export class Pessoa {
    PessoaId: number;
    Nome: string;
    CPF: string;
    CidadeId: number;
    Idade: number;
    Cidade: Cidade;
}