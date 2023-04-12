//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

//Con for...of:

const newToys = [];

for (const iterator of toys) {
      if (!iterator.name.includes("gato")) {
        newToys.push(iterator);       
    }
  }
  console.log(newToys);

  
//con for:

for (let i = 0; i < toys.length; i++) {
  const juguete = toys[i];
  if (juguete.name.includes("gato")) {
    toys.splice(i, 1);
    i--;
  }
}
console.log(toys);
