function saudar(): void {
    console.log("Olá, seja bem-vindo!");
}
saudar();

function saudar2(nome: string): void {
    console.log(`Olá, ${nome}, seja bem-vindo!`);
}
saudar2("Maria");

function saudar3(nome: string = "Usuario Desconhecido"): string {
    return `Olá, ${nome}, seja bem-vindo!`;
}
saudar3("João");

function somar(a: number, b: number): number {
    let resultado = a + b;
    return resultado;
}
console.log(`O resultado da soma é: ${somar(5, 10)}`);

function verificarPar(numero: number): boolean {
    return numero % 2 === 0;
}

let resultado=verificarPar(4);

if (resultado) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

function somarArray(numeros: number[]): number {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}
console.log(`A soma do array é: ${somarArray([1, 2, 3, 4, 5])}`);

function apresentar(nome?: string, idade?: number): string {
    if (nome && idade) {
        return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
    } else if (nome) {
        return `Olá, meu nome é ${nome}.`;
    } else {
        return "Olá, sou uma pessoa sem nome definido.";
    }
}

console.log(apresentar("Ana", 25));
console.log(apresentar("Carlos"));
console.log(apresentar());
// console.log(apresentar(undefined, 30));

function calcularIMC(peso: number, altura: number): string | null {
    if (peso <= 0 || altura <= 0) {
        return null;
    }

    const imc = peso / (altura * altura);
    let classificacao: string;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    return `Seu IMC é ${imc.toFixed(2)} e a classificação é: ${classificacao}.`;
}
console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(-70, 1.75));