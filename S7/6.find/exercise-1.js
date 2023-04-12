//Dado el siguiente array, usa .find() para econtrar el número 100.


const numbers = [32, 21, 63, 95, 100, 67, 43];

let numeros = numbers.find((numero) => {
    return numero === 100;
});
console.log(numeros);//100

