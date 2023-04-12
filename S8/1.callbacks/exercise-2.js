/*Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers*/

const userAnwsers = [];

//let title$$ = document.querySelector("title");          
//console.log(title$$);
const h1$$ = document.createElement("h1");
const h2$$ = document.createElement("h1");

function confirmExample(description1){  
    h1$$.textContent = confirm(description1)
    document.body.appendChild(h1$$);
    return description1
}

function promptExample(description2){
    h2$$.textContent = prompt(description2)
    document.body.appendChild(h2$$);
    return description2
}

function father(description3, callback){
userAnwsers.push(callback(description3));
}

father("hola", confirmExample);
father("gato", promptExample);
father("ventana", promptExample);

console.log(userAnwsers);/*["hola","gato","ventana"]*/

//NO ENTIENDO LO QUE ME ESTÁ PIDIENDO EL EJERCICIO

