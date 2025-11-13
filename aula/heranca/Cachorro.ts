import { Animal } from "./Animal";

export class Cachorro extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`O cachorro ${this._nome} está latindo.`);
    }

    public correr(): void {
        console.log(`O cachorro ${this._nome} está correndo.`);
    }
}