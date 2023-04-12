//Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, añade la propiedad .mutation al alien con el valor de la mutación encontrada.

const aliens = [
    {name: 'Zalamero', planet: 'Eden', age: 4029},
    {name: 'Paktu', planet: 'Andromeda', age: 32},
    {name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
                                                                             ////////FFFAAAAAAALLLLLLLLLLLLLOOOOOOOOOO
const mutations = [
    {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
    {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
    {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];


const alien = aliens.find((alien) => {                 
    return alien.name === "Cucushumushu"
});
console.log(alien);//[ { name: 'Cucushumushu', planet: 'Marte', age: 503021 } ]

const mutacion = mutations.find((mutacion) => {
    return mutacion.name === "Porompompero"
});
console.log(mutacion);//[{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'}]

alien.mutacion = {...mutacion};

console.log(alien);
/*{
  name: 'Cucushumushu',
  planet: 'Marte',
  age: 503021,
  mutacion: {
    name: 'Porompompero',
    description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  }
}*/
