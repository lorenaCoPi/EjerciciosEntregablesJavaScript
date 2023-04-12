//Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];

let arr = users.map((usuario) => usuario.id + " " + usuario.name );
console.log(arr);//[ '1 Abel', '2 Julia', '3 Pedro', '4 Amanda' ]

