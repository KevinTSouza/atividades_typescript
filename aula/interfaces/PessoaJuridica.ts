import { Pessoa } from "./Pessoa";

export interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: string;
}

const pessoaJuridica: PessoaJuridica = {
    nome: "Maria",
    sobrenome: "Simões",
    conta: 12345,
    cnpj: "12.345.678/0001-99"
};

console.log(pessoaJuridica);