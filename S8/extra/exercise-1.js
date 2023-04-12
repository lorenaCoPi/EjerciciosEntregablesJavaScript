/*En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.*/


//VOY A USAR LA API DE DIGIMON

const digimonContainer$$ = document.getElementById("contenedor");

const getDigimon = () => {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
      .then((response) => {
    return response.json();
  }).then((data) => {
    for(i = 0; i < data.length; i++) {
        digimonContainer$$[i] = document.createElement("div");
        const html = `
        <div class="cards">
        <h1 class="card-title">${data[i].name}</h1>
        <img src=${data[i].img} class="card-image"/>
        <p>${data[i].level}</p>
        </div>`;        
        digimonContainer$$[i].innerHTML += html;
        document.body.appendChild(digimonContainer$$[i]);
}});
  }

getDigimon();

