import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {
    private _numRodas: number;
    private _velocidade: number;

    constructor(capacidade: number, numRodas: number, velocidade: number) {
        super(capacidade);
        this._numRodas = numRodas;
        this._velocidade = velocidade;
    }

    public get numRodas(): number {
        return this._numRodas;
    }

    public set numRodas(numRodas: number) {
        this._numRodas = numRodas;
    }

    public get velocidade(): number {
        return this._velocidade;
    }

    public set velocidade(velocidade: number) {
        this._velocidade = velocidade;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Número de Rodas: ${this._numRodas}`);
        console.log(`Velocidade: ${this._velocidade} km/h`);
    }
}