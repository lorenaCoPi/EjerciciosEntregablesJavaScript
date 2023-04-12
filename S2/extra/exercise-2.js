//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.


const usuarios = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volumen: 50},
            rain: {format: 'ogg', volumen: 60},
            firecamp: {format: 'mp3', volumen: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volumen: 30},
            shower: {format: 'ogg', volumen: 55},
            train: {format: 'mp3', volumen: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volumen: 50},
            train: {format: 'ogg', volumen: 60},
            firecamp: {format: 'mp3', volumen: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volumen: 67},
            wind: {format: 'ogg', volumen: 35},
            firecamp: {format: 'mp3', volumen: 60},
        }
    },
]
let suma = 0;
let media = 0;
let volumenes = 0;

for (const iterator of usuarios) {
    for (const key in iterator.favoritesSounds) {
        if (iterator.favoritesSounds.hasOwnProperty.call(iterator.favoritesSounds, key)) {
            const element = iterator.favoritesSounds[key].volumen;
            if (typeof element === "number") {
                suma += element;               
            }
            volumenes += 1;
        }       
     }
}
        media = suma / volumenes;
        console.log(media);
        
