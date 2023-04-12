//Inserta dinamicamente en un html un div que contenga una p con javascript.

const myP$$ = document.createElement("p")
const myDiv$$ = document.createElement("div")
document.body.appendChild(myDiv$$);

myP$$.textContent="este es mi p dentro de mi div";
myDiv$$.appendChild(myP$$);

