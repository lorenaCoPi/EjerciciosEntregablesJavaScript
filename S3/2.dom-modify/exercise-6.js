/*Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul");//ul
document.body.appendChild(ul$$);

const li$$ = []; //li
const appsText$$ = []; //cada una de las apps que van dentro de li

for(let i = 0; i < apps.length; i++) {
    li$$[i] = document.createElement("li");
    appsText$$[i] = document.createTextNode(apps[i]);
    li$$[i].appendChild(appsText$$[i]);
    ul$$.appendChild(li$$[i]);
}

