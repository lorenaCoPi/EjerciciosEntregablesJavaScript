//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
    'Camiseta de Pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta'
]

for (i = 0; i < products.length; i++) {
   let element = products[i];
    console.log(element.includes("Camiseta"));
    if (element.includes("Camiseta")) {
        console.log(element);
    }
}