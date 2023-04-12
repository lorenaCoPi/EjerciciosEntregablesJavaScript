//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

let div$$ = document.createElement("div");    
//div$$.className = ("container");                 
let button$$ = document.querySelector("button");

for (i = 0; i < countries.length; i++) {
    div$$[i] = document.createElement("div");
    const inside = `
    <h4>${countries[i].title}</h4>
    <a href=""><img src=${countries[i].imgUrl}></a>
    `
    div$$[i].innerHTML += inside;  
    document.body.appendChild(div$$[i]); 
    //console.log(div$$); 
   //button$$.addEventListener("click", () => div$$[div$$.length-1].remove()); -> No elimina el último elemento, y no sé el motivo
}

//NO SÉ EN QUÉ FALLA

button$$.addEventListener("click", () => div$$[4].remove());