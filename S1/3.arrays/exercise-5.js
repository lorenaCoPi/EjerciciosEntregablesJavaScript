//Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);

const ultimoElemento = rickAndMortyCharacters.slice(-1);
console.log(ultimoElemento);

const primerElemento = rickAndMortyCharacters[0];
console.log(primerElemento);
