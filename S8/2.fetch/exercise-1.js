//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

const cambio = 
fetch("https://api.agify.io?name=michael")
.then((response) => response.json())
.then((data) => {
    console.log(data.age, data.count, data.name);//62 298219 michael
    return data;
 });
