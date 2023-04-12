/*En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.*/
let count = 1;

const get = async (name) => {
    response = await fetch(`https://api.nationalize.io?name=${name}`);
    res = await response.json();
    console.log(res.country);
    draw(res);
}

const takeInput = () => {
    const input$$ = document.querySelector('input');
    const button$$ = document.querySelector('button');
    button$$.addEventListener('click', () => get(input$$.value));
    console.log(input$$.value);
}

const draw = (res) => {
const body$$ = document.querySelector("body");
const p$$ = document.createElement('p');
p$$.setAttribute("class", "count");
body$$.appendChild(p$$);
const button$$ = document.createElement("button");
button$$.setAttribute("class", "count");
button$$.textContent = "X";
document.body.appendChild(button$$);

p$$.innerHTML = `El nombre ${res.name} tiene un ${(res.country[0].probability * 100)}% de ser de ${res.country[0].country_id} y un ${(res.country[1].probability * 100)}% de ser de ${res.country[1].country_id}.`;

button$$.addEventListener("click" , () => {
    p$$.remove();
    button$$.remove();
    count++;
   });
}

const init = () => {
    get ();
    takeInput();
}
init();

