/*Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

let juegos = videogames.filter((juegos) => juegos.genders.includes("RPG"));
console.log(juegos);

const suma = juegos.reduce((acumulado, actual) => acumulado + actual.score, 0);
console.log(suma);//31.5

let vueltas = 0;

for(i = 0; i < juegos.length; i++) {
    vueltas += 1;
}
let media = suma / vueltas;
console.log(media);//7.875

