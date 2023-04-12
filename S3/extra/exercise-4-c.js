/*Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.*/

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

let div$$ = document.createElement("div");    
//console.log(div$$);              
//let button$$ = document.querySelector("button");

const contenedores = () => {
    for (i = 0; i < countries.length; i++) {
    div$$[i] = document.createElement("div");
    const inside = `
    <h4>${countries[i].title}</h4>
    <a href=""><img src=${countries[i].imgUrl}></a>
    <button type="text" class="botones">Elimíname</button>
    `  
    div$$[i].innerHTML += inside;
    document.body.appendChild(div$$[i]);     
    }         
}

contenedores();

const button$$ = document.querySelectorAll("botones");
//console.log(button$$);
button$$.addEventListener("click", () => div$$.remove());  

//ME SALE UN FALLO Y ME DICE QUE button$$.addEventListener NO ES UNA FUNCIÓN, no sé donde está el fallo

