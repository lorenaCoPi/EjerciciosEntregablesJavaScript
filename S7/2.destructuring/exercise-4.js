//En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
}

const {name, itv} = car;

console.log(name);//Mazda 6
console.log(itv);//[ 2015, 2011, 2020 ]

const [año1, año2, año3] = itv;
console.log(`Estos son los diferentes años: ${año1}, ${año2} y ${año3}`);//Estos son los diferentes años: 2015, 2011 y 2020