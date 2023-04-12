/*Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div data-function="printHere"></div>

</body>
</html>
```*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let list$$ = document.createElement("ul");
let div$$ = document.querySelector("div");
div$$.appendChild(list$$);

let li$$ = [];
let coches$$ = [];

for (i = 0; i < cars.length; i++) {
    li$$[i] = document.createElement("li");
    coches$$[i] = document.createTextNode(cars[i]);
    li$$[i].appendChild(coches$$[i]);
    list$$.appendChild(li$$[i]);
}