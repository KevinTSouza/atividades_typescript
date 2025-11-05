// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
import readlineSync = require("readline-sync");
import { Queue } from "../../aula/Queue";

const filaClientes = new Queue<string>();
let opcao: number;
do {
    console.log("*********************************************************");
    console.log(" ");
    console.log("          1 - Adicionar Cliente na Fila");
    console.log("          2 - Listar todos os Clientes");
    console.log("          3 - Retirar Cliente da Fila");
    console.log("          0 - Sair");
    console.log(" ");
    console.log("*********************************************************");
    opcao = readlineSync.questionInt("Entre com a opcao desejada: ");
    
    switch (opcao) {
        case 1:
            const nomeCliente = readlineSync.question("Digite o nome do Cliente: ");
            filaClientes.enqueue(nomeCliente);
            console.log(`Cliente ${nomeCliente} adicionado à fila.`);
            break;
        case 2:
            console.log("Clientes na fila:");
            filaClientes.printQueue();
            break;
        case 3:
            if (filaClientes.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                const clienteChamado = filaClientes.dequeue();
                console.log(`Cliente ${clienteChamado} foi chamado!`);
            }
            break;
        case 0:
            console.log("Finalizando o programa.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);