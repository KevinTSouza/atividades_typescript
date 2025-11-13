import readline = require("readline-sync");

let loop: boolean = true;

do {
    try {

        let idade: number = readline.questionInt("Digite a idade da Pessoa: ");

        validarIdade(idade);

        loop = false;

    } catch (error) {
        if (error instanceof Error)
            console.error("Erro: Pode não man!");
        else
            console.error("Erro:" + error);
    }
} while (loop);

function validarIdade(idade: number): void {

    if (idade < 18)
        throw new Error("Pode não man!");
    else
        console.log("Já pode dirigir!");

}