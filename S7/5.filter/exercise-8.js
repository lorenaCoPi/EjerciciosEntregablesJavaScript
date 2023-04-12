/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/

                             

const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

                                               
let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");

let nombre = streamers.filter((nombre) => {
  nombre.name.includes(input$$.value.toLowerCase);
  console.log(nombre);
  for (const key in nombre) {
    if (nombre.hasOwnProperty.call(nombre, key)) {
      const element = nombre[key];
      if(element == input$$.value)
       console.log(nombre); 
    }
}
   });

button$$.addEventListener("click", (nombre) => {
  console.log(input$$.value);  
 })



