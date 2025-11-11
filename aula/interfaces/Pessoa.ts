export interface Pessoa {
    nome: string;
    sobrenome: string;
}

const pessoa1: Pessoa = {
    nome: "Ana",
    sobrenome: "Silva"
};

const pessoa2: Pessoa = {
    nome: "Bruno",
    sobrenome: "Souza"
};

console.log(pessoa1);
console.log(pessoa2);