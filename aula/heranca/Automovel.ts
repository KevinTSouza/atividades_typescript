import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre {
    private _cor: string;
    private _numeroPortas: number;
    private _placa: string;
    private _marcha: number;

    constructor(capacidade: number, numRodas: number, velocidade: number, cor: string, numeroPortas: number, placa: string, marcha: number) {
        super(capacidade, numRodas, velocidade);
        this._cor = cor;
        this._numeroPortas = numeroPortas;
        this._placa = placa;
        this._marcha = marcha;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(cor: string) {
        this._cor = cor;
    }

    public get numeroPortas(): number {
        return this._numeroPortas;
    }

    public set numeroPortas(numeroPortas: number) {
        this._numeroPortas = numeroPortas;
    }

    public get placa(): string {
        return this._placa;
    }

    public set placa(placa: string) {
        this._placa = placa;
    }

    public get marcha(): number {
        return this._marcha;
    }

    public set marcha(marcha: number) {
        this._marcha = marcha;
    }

    public mover(): void {
        console.log("O automóvel está se movendo.");
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Cor: ${this._cor}`);
        console.log(`Número de Portas: ${this._numeroPortas}`);
        console.log(`Placa: ${this._placa}`);
        console.log(`Marcha Atual: ${this._marcha}`);
    }
}