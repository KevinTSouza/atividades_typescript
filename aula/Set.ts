// const nomeDoSet: Set<T> = new Set<T>();
// const nomeDoSet: Set<T> = new Set<T>([elemento1, elemento2, ...]);
// nao permite elementos duplicados
// const nomeDoSet: Set<T> = new Set<T>([elemento1, elemento2, elemento2...]);

const frutas: Set<string> = new Set<string>(["Maçã", "Banana", "Laranja", "Maçã", "Uva"]);
console.log(frutas);

for (let fruta of frutas) {
    console.log(fruta);
}

console.log(`Existe a fruta Banana? ${frutas.has("Banana")}`);

console.log(frutas.delete("Laranja"));

console.log(`Tamanho do Set: ${frutas.size}`);

frutas.add("Abacaxi");

for (let fruta of frutas) {
    console.log(fruta);
}