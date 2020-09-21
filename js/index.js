
var imagenes = document.querySelectorAll(".authorPhoto");
var botonNext = document.querySelectorAll(".buttonDeck img");

console.log(`La cantidad de imagenes es: ${imagenes.length}`);
console.log(`Hay ${botonNext.length} botones`);

// Añadiendo los eventos

botonNext[1].addEventListener("click", nextImage);

//Funcion nextImage
function nextImage() {
    var imagenActual = actual(imagenes);
    console.log(`La imagen actual es: ${imagenActual}`);
    var imagenSiguiente = siguiente(imagenActual, imagenes.length);
    console.log(`La imagen siguiente es: ${imagenSiguiente}`);
    imagenes[imagenActual].classList.add("efectoFadeOut");
    setTimeout(() => {
        imagenes[imagenActual].classList.add("hidden");
        imagenes[imagenActual].classList.remove("efectoFadeOut");
        imagenes[imagenSiguiente].classList.remove("hidden");
        imagenes[imagenSiguiente].classList.add("efectoFadeIn");
        setTimeout(() => {
            imagenes[imagenSiguiente].classList.remove("efectoFadeIn");
        }, 2000);
    }, 2000);
}

// Determina cual es la imagen actual
function actual(params) {
    for(var index = 0; index < params.length; index++)
    {
        if (!(params[index].classList.contains("hidden"))) {
            break;
        }
    }
    return index;
}

//Determina la siguiente imagen
function siguiente(imgActual, imgTotal) {
    if(imgActual === (imgTotal-1)){
        return 0
    } else {
        return imgActual + 1;;
    }
}



// $(".buttonDeck img").click(prueba);

// function prueba() {
//     alert("Presionaste Click");
// }

// var imagenes = $(".authorPhoto");

// miCarrusel(imagenes);

// function miCarrusel(params) {
//     console.log("Número total de imágenes:" + params.length);
    
//     var indexActual = actual(params.length);
//     console.log("Mostrando la imagen " + (indexActual + 1));
// }

// // Determina cual es la imagen actual
// function actual(params) {
//     for(var index = 0; index < params; index++)
//     {
//         if (!($("#img-"+(index+1)).hasClass("hidden"))) {
//             break;
//         }
//     }

//     return index;
// }