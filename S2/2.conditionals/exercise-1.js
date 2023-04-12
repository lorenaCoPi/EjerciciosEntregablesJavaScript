//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for (let i = 0; i < alumns.length; i++) {
   let nombre = alumns[i].name;
   let trimestre1 = alumns[i].T1;
   let trimestre2 = alumns[i].T2;
   let trimestre3 = alumns[i].T3;
   if (( trimestre1 === true && trimestre2 === true )||( trimestre1 === true && trimestre3 === true) ||
    ( trimestre2 === true && trimestre3 === true)) {
    console.log(nombre + " isApproved");
   }  else {
    console.log(nombre + " isNotApproved");
}
}   