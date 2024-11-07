// nesse algoritmo deu erro também, corrigi a sintaxe da Arrow Function isOdd e arr para numbers.

const numbers = [1, 2, 3, 4, 5];

// Essa função serve para verificar se o número é ímpar;
const isOdd = (x) => x % 2 !== 0;

// aqui temos o filtter para filtrarmos os nummeros ímpares do array numbers.
const output = numbers.filter(isOdd);
console.log(output);
// resultado [1,3,5].