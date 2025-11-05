// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
import readlinesync = require("readline-sync");
import { Stack } from "../../aula/Stack";

const pilhaLivros = new Stack<string>();
let opcao: number;

do {
    console.log("*********************************************************");
    console.log(" ");
    console.log("          1 - Adicionar Livro na pilha");
    console.log("          2 - Listar todos os Livros");
    console.log("          3 - Retirar Livro da pilha");
    console.log("          0 - Sair");
    console.log(" ");
    console.log("*********************************************************");
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nomeLivro = readlinesync.question("Digite o nome do Livro: ");
            pilhaLivros.push(nomeLivro);
            console.log(`Livro ${nomeLivro} adicionado à pilha.`);
            break;
        case 2:
            console.log("Lista de Livros na pilha:");
            pilhaLivros.printStack();
            break;
        case 3:
            if (pilhaLivros.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                const livroRetirado = pilhaLivros.pop();
                console.log(`Livro ${livroRetirado} foi retirado da pilha!`);
            }
            break;
        case 0:
            console.log("Finalizando o programa.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);