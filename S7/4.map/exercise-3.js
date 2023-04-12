//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},               
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];

let arr = cities.map((arr) => {
if(arr.isVisited == true){
    console.log(`${arr.name}: Visitado`)
} else {
    console.log(`${arr.name}`)
}
});

