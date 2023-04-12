/*Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>```*/

const p$$ = [];

const divs$$ = document.querySelectorAll(".fn-insert-here");
//console.log(divs$$);

for (i = 0; i < divs$$.length; i++) {
    p$$[i] = document.createElement("p");
    p$$[i].textContent = "Voy dentro!";
    divs$$[i].appendChild(p$$[i]);
}