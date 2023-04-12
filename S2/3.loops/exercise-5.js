//Usa un bucle forof para recorrer todos los juguetes y añade los que tengan más de 15 ventas (`sellCount`) al array `popularToys`. Imprimelo por consola.

const popularToys = [];
const juguetes = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
]

//con bucle forof:

for (const juguete of juguetes) {
    if (juguete.sellCount > 15) {
       popularToys.push(juguete);          
    }
}console.log(popularToys); 

//con bucle for:

for (i = 0; i < juguetes.length; i++) {
    let juguete = juguetes[i];
    if (juguete.sellCount > 15) {
        popularToys.push(juguetes[i]);
    }
}//console.log(popularToys)