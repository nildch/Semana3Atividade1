//aqui tem uma pegadinha que o senhor nao me engana, que era no arr.map, se o array era numbers, entao tenho 
//que colocar numbers.map para funcionar, para dobrar cada número do array.
// resultado [1,2,3,4,5,]
const numbers = [1,2,3,4,5];
const output = numbers.map((x)=>{
  return x * 2;  
});
console.log(numbers);