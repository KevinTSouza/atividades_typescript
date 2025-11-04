// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá 
// adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    const cor: string = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}
console.log("\nListar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}
cores.sort();
console.log("\nOrdenar as cores:");
for (let cor of cores) {
    console.log(cor);
}

