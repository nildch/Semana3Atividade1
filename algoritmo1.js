//neste código ajustei a function para Arrow function, que irá calcular o dobro de um numero.
// o metodo map que ja estava, ele vai aplicar a função calcularDobro em cada elemento do array numeros.
// e ele irá retornar [2,4,6,8,10].

const numeros = [1, 2, 3, 4, 5];
const calcularDobro = (numero) => numero * 2;
const numerosDobro = numeros.map(calcularDobro);
console.log(numerosDobro);