interface Pessoa {
    nome: string;
    peso: number;
    altura: number;
}

const pessoas: Pessoa[] = [
    { nome: "Ana", peso: 68, altura: 1.65 },
    { nome: "Bruno", peso: 85, altura: 1.75 },
    { nome: "Carla", peso: 54, altura: 1.60 },
    { nome: "Daniel", peso: 90, altura: 1.80 }
];

const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

pessoas.forEach(pessoa => {
    const imc = calcularIMC(pessoa.peso, pessoa.altura);
    console.log(`O IMC de ${pessoa.nome} é: ${imc.toFixed(2)}`);
});