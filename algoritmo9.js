// um array de objetos representando estudantes com suas médias.
// temos um ajuste a média de estudantes com média abaixo de 60 e vai filtrando os que ficam acima de 60
// corrigi student para students e marks para average.
// resultado  { name: 'Smith', average: 80 },{ name: 'Jenny', average: 69 },{ name: 'Tiger', average: 75 }
let students = [
    {name:"Smith", average:80},
    {name:"Jenny", average:69},
    {name:"John", average:35},
    {name:"Tiger", average:55}
   ];
   const output = students.map((student)=>{
       if(student.average < 60){
           student.average += 20;
       }
       return student;
   }).filter((student)=> student.average > 60);
   console.log(output);   