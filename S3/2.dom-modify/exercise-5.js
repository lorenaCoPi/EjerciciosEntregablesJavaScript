/*Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h2 class="fn-insert-here"></h2> 
</body>
</html>*/

const h2$$ = document.querySelector(".fn-insert-here");
h2$$.textContent = "Wubba Lubba dub dub";
//console.log(myh2$$);