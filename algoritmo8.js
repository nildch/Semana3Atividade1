// mais um array de objetos que vai filtrar usuarios com idade menor que trinta. e usando o map 
// mapeando para seus primeiro nome.
//resultado [ 'john', 'ronald' ].
const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ];
  const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
  console.log(output);  