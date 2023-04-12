/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


let ul$$ = document.createElement("ul");//ul
document.body.appendChild(ul$$);
let li$$ = [];//li
let ciudades$$ = [];//countries que van dentro de li

for (let i = 0; i < countries.length; i++) {
    li$$[i] = document.createElement("li");
    ciudades$$[i] = document.createTextNode(countries[i]);
    li$$[i].appendChild(ciudades$$[i]);
    ul$$.appendChild(li$$[i]);
}


