/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:*/

let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, a, b){
   let player = array[a];
   array.splice(a,1,array[b]);
   array.splice(b,1,player);
   return array;
}

console.log(swap(array,0,2));//[ 'Fernando Muralla', 'Cristiano Romualdo', 'Mesirve', 'Ronalguiño' ]
console.log(swap(array,1,3));//[ 'Fernando Muralla', 'Ronalguiño', 'Mesirve', 'Cristiano Romualdo' ]


