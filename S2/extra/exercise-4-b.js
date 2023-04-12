/*Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/
let arr1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let arr2 = ["Pera", "Kiwi", "Piña", "Mango"];

function findArrayIndex(array, text) {
   for(let i = 0; i < array.length; i++){
      if(array[i] == text){
          return(i);
      }
  }
}
function removeItem(array, text) {
    let i = findArrayIndex(array, text);
    array.splice(i, 1);
    return (array);
}

console.log(removeItem(arr1, "Mosquito"));
console.log(removeItem(arr1, "Salamandra"));
console.log(removeItem(arr2, "Pera"));
console.log(removeItem(arr2, "Kiwi"));
