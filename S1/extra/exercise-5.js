//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

let media = 0;
let suma = 0;
let ventas = 0;

for (i=0; i < products.length; i++) {
let element = products[i].sellCount;
if (typeof element === "number") {
    suma += element;   
  }
  ventas +=1
}
console.log(suma); 
media = suma /ventas;
console.log(media);


