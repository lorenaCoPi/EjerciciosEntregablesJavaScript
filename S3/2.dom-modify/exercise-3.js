//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const myDiv$$ = document.createElement("div")
document.body.appendChild(myDiv$$);

const arrayP$$ = [];

for (let i = 0; i < 6; i++) {
    arrayP$$[i] = document.createElement("p");
    myDiv$$.appendChild(arrayP$$[i]);
}


