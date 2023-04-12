/*Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.*/ 

const countries = [
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

                                                
let div$$ = document.createElement("div");
//document.body.appendChild(div$$);
//let h4$$ = document.createElement("h4");
//let imgUrl$$ = document.createElement("url");

for (i = 0; i < countries.length; i++) {
    div$$[i] = document.createElement("div");
    const inside = `
    <h4>${countries[i].title}</h4>
    <a href=""><img src=${countries[i].imgUrl}></a>
    `
    div$$[i].innerHTML += inside;
    document.body.appendChild(div$$[i]);
}





