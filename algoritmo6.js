// outra pegadinha "parserInt" que no caso é pra ser "parseInt". então alterei.
// o algoritmo vai solicitar uma entrada de usuário e convertendo para inteiro, cria um array do tamanho
// especificado com elementos nulos e preenchendo um novo array com valores de 1 até o valor especificado.
// não sei se o senhor vai permitir mas eu usei o módulo readline pra rodar no node, porque o prompt nao 
//é reconhecido no terminal.
//resultado vai pedir pra digitar um numero e retornar um array.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (input) => {
  
  const value = parseInt(input);
  const array = new Array(value).fill(null);
  let values = new Array(value).fill(null).map((_, index) => index + 1);
  
  console.log("Array preenchido:", values);

  rl.close();
});
