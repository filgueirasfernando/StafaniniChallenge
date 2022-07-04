import { Cidade } from "./Cidade";

export class Pessoa {
    pessoaId: number;
    nome: string;
    cpf: string;
    cidadeId: number;
    idade: number;
    cidade: Cidade;
}