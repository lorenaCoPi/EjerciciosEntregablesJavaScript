//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [
    {id:1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];                                     



let arr = users.map((usuario) => usuario.name );
//console.log(arr);[ 'Abel', 'Julia', 'Pedro', 'Amanda' ]

for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("A")) {
        arr.splice(arr[i], 1, "Anacleto"); //El código debería funcionar tanto para Abel como para Amanda, pero solo me cambia el valor de Abel, 
                                          //y no encuentro el fallo, por eso más abajo realizo el lastIndexOf
    }
}
arr.splice(arr.lastIndexOf("A"), 1, "Anacleto");
console.log(arr);//[ 'Anacleto', 'Julia', 'Pedro', 'Anacleto' ]
