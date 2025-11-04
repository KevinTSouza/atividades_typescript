import readlinesync = require("readline-sync");

let quantidade: number;
let altura: number;

quantidade = readlinesync.questionInt("Digite a quantidade de numeros que deseja inserir: ", 
    { limitMessage: "Por favor, insira um numero valido." }
);

console.log(`A quantidade é ${quantidade}`);

altura = readlinesync.questionFloat("Digite a sua altura em cm: ",
    { limitMessage: "Por favor, insira uma altura valida." }
);

console.log(`A altura é ${altura} cm`);
