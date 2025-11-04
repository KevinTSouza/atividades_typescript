//const nomeDoArray: Array<T> = new Array<T>();
//const nomeDoArray: Array<T> = new Array<T>(elemento1, elemento2, ...);

const nomes: Array<string> = new Array<string>("Ana", "Bruno", "Carlos");

for (let nome of nomes) {
    console.log(`O nome é ${nome}`);
}

nomes.push("Daniela");

for (let nome of nomes) {
    console.log(`O nome é ${nome}`);
}

// Adiciona elementos no início do array
nomes.unshift("Zuleica", "Marcos");

for (let nome of nomes) {
    console.log(`O nome é ${nome}`);
}

console.log(`O array possui ${nomes.length} elementos.`);

console.log(`A pessoa Carlos está no array? ${nomes.includes("Carlos")}.`);

console.log(`O indice do Carlos é ${nomes.indexOf("Carlos")}.`);

nomes[0] = "Banana";

