/*Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-4.js" defer></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>*/

const p$$ = document.createElement("p");
p$$.textContent = "Soy dinámico!";
document.body.appendChild(p$$);