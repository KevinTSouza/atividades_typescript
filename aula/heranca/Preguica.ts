import { Animal } from "./Animal";

export class Preguica extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`A preguiça ${this._nome} está fazendo um som bem devagar.`);
    }

    public escalar(): void {
        console.log(`A preguiça ${this._nome} está escalando a árvore lentamente.`);
    }
}