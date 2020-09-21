//Declaracion de variables globales
var imagenes = document.querySelectorAll(".authorPhoto");
var botones = document.querySelectorAll(".buttonDeck img");

//Añadiendo eventos
botones[1].addEventListener("click", btnSiguiente);

//Funcion siguienteImagen()
function btnSiguiente() {
    //Declaracion de variables locales
    var imgActual, imgSiguiente;

    console.log("Iniciando funcion siguienteImagen()....");
    //Obtener imagen actual
    imgActual = imagenActual(imagenes);
    console.log(`La imagen Actual es: ${imgActual}`);
    //Obtener Imagen Siguiente
    imgSiguiente = imagenSiguiente(imgActual, imagenes.length);
    console.log(`La imagen siguiente es ${imgSiguiente}`);
    // Prepara la imagen siguiente para el cambio
    imagenes[imgSiguiente].classList.remove("hidden");
    imagenes[imgSiguiente].style.opacity = "0%";
    //Cambia la imagen
    var tiempo = 500 / 5;
    setTimeout(() => {
        imagenes[imgActual].style.opacity = "80%";
        imagenes[imgSiguiente].style.opacity = "20%";
        setTimeout(() => {
            imagenes[imgActual].style.opacity = "60%";
            imagenes[imgSiguiente].style.opacity = "40%";
            setTimeout(() => {
                imagenes[imgActual].style.opacity = "40%";
                imagenes[imgSiguiente].style.opacity = "60%";
                setTimeout(() => {
                    imagenes[imgActual].style.opacity = "20%";
                    imagenes[imgSiguiente].style.opacity = "80%";
                    setTimeout(() => {
                        imagenes[imgActual].classList.add("hidden");
                        imagenes[imgSiguiente].style.opacity = "100%";
                    }, tiempo);
                }, tiempo);
            }, tiempo);
        }, tiempo);
    }, tiempo);
    


}

//Determina cual es la imagen Actual
function imagenActual(params) {
    //Declaración de variables locales
    var index;
    //Busqueda de la imagen actual
    for (index = 0; index < params.length; index++) {
        if (!params[index].classList.contains("hidden")) {
            break;
        }    
    }
    //Devuelve el valor
    return index;
}

//Determina la siguiente imagen
function imagenSiguiente(actual, total) {
    if (total === (actual + 1)) {
        return 0;
    } else {
        return actual + 1;
    }
}
