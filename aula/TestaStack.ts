import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Livro 1");
pilha.push("Livro 2");
pilha.push("Livro 3");

console.log("Conteúdo da pilha:");
pilha.printStack();

console.log(`\nRemovendo o topo da pilha: ${pilha.pop()}`);

console.log("Conteúdo da pilha:");
pilha.printStack();

console.log("\nAdicionando item 'Livro verde' na pilha.");
pilha.push("Livro verde");

console.log(`\nTopo da pilha: ${pilha.peek()}`);

console.log(`\nNúmero de itens na pilha: ${pilha.count()}`);

console.log(`\nA pilha contém 'Livro 2'? ${pilha.contains("Livro 2")}`);

console.log(`\nLimpando a pilha... ${pilha.clear()}`);

console.log(`\nA pilha está vazia? ${pilha.isEmpty()}`);