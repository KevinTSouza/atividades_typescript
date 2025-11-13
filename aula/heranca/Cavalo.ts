import { Animal } from "./Animal";

export class Cavalo extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`O cavalo ${this._nome} está relinchando.`);
    }

    public correr(): void {
        console.log(`O cavalo ${this._nome} está galopando.`);
    }
}