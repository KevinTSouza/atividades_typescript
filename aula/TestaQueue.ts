import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++) {
    fila.enqueue(i)
}

console.log("Elementos da fila:");
fila.printQueue();

console.log("\nRemovendo elementos da fila:");
fila.dequeue();

fila.printQueue();

fila.enqueue(11);

fila.printQueue();

console.log(`\nPrimeiro elemento da fila: ${fila.peek()}`);

console.log(`\nNúmero de elementos na fila: ${fila.count()}`);

console.log(`\nA fila contém o número 5? ${fila.contains(5)}`);

console.log(`\nLimpando a fila... ${fila.clear()}`);

console.log(`\nA fila está vazia? ${fila.isEmpty()}`);