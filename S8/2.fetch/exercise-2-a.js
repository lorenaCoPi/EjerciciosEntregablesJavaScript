/*Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.*/

//const baseUrl = 'https://api.nationalize.io?name=';

const get = async (name) => {                                   
    response = await fetch(`https://api.nationalize.io?name=${name}`);
    res = await response.json();
    console.log(res);
}

const takeInput = () => {
    const input$$ = document.querySelector('input');
    const button$$ = document.querySelector('button');
    button$$.addEventListener('click', () => get(input$$.value));
}
    get ();
    takeInput();
