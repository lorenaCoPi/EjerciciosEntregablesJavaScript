/*Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

- Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros*/

const flecha = ((a = 10, b = 5) => {
return a + b;
}); 

//- Ejecuta esta función sin pasar ningún parametro
console.log(flecha()); //15

//- Ejecuta esta función pasando un solo parametro
console.log(flecha(18));//23

//- Ejecuta esta función pasando dos parametros
console.log(flecha(9, 21));//30