//Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copyDefinitiva = [...colors];
const copyPuente = [...copyDefinitiva.splice(2,1)];
console.log(copyDefinitiva);//[ 'rojo', 'azul', 'verde', 'naranja' ]
console.log(colors);//[ 'rojo', 'azul', 'amarillo', 'verde', 'naranja' ]
