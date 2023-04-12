/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.*/

let categorias = [];

let categoriasFinal = [];

const peliculas = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


for (const iterator of peliculas) {
    for (const iterator2 of iterator.categories) {
        categorias.push(iterator2);        
    }  
} 
categorias.forEach((item)=>{
    if(!categoriasFinal.includes(item)){
        categoriasFinal.push(item);
    }
})

console.log(categoriasFinal); 



