/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.*/

let arr1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let arr2 = ["Pera", "Kiwi", "Piña", "Mango"];

function findArrayIndex(array, text) {
   for(let i = 0; i < array.length; i++){
      if(array[i] == text){
          return(i);
      }
  }
}

console.log(findArrayIndex(arr1, "Mosquito"));
console.log(findArrayIndex(arr1, "Salamandra"));
console.log(findArrayIndex(arr2, "Pera"));
console.log(findArrayIndex(arr2, "Kiwi"));






