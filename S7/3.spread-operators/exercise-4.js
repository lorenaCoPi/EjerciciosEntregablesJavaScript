//Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newObject = {...toy, ...toyUpdate};
console.log(newObject);
/*{
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor',
  lights: 'rgb',
  power: [ 'Volar like a dragon', 'MoonWalk' ]
}*/