/*En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.*/

//const baseUrl = 'https://api.nationalize.io?name=';
                                                             
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
body$$.appendChild(p$$);
p$$.innerHTML = `El nombre ${res.name} tiene un ${(res.country[0].probability * 100)}% de ser de ${res.country[0].country_id} y un ${(res.country[1].probability * 100)}% de ser de ${res.country[1].country_id}.`;
}

const init = () => {
    get ();
    takeInput();
}
init();