// nesse algoritmo contém um array de objetos, que vai concatenar o primeiro e ultimo nome de cada usuario.
// resultado [ 'john colben', 'jimmy fred', 'sam boston', 'ronald bristh' ].

const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];
  const output = users.map((x)=> x.firstName+" "+x.lastName);
  console.log(output);  