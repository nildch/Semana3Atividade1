// outra pegadinha para que dois "::" nos nomes ? kkk.
// temos outro array de objetos e temos o nosso famoso filtter que esta filtrando os estudantes 
// maiores de idade.
// resultado será 3.
let estudantes =[
    {nome:"João", idade:15},
    {nome:"Maria", idade:20},
    {nome:"Felipe", idade:22},
    {nome:"Pedro", idade:12},
    {nome:"Joana", idade:18},
   ];
   const details = estudantes.filter((x)=> x.idade >= 18);
   console.log(details.length);  