//Declaracion de variables globales
var imagenes = document.querySelectorAll(".authorPhoto");
var botones = document.querySelectorAll(".buttonDeck img");
var testimonios = document.querySelectorAll(".testimonialContainer");

//Añadiendo eventos
botones[0].addEventListener("click", btnAnterior);
botones[1].addEventListener("click", btnSiguiente);

//Funcion siguienteImagen()
function btnSiguiente() {
    //Declaracion de variables locales
    var imgActual, imgSiguiente;

    console.log("Iniciando funcion btnSiguiente()....");
    //Obtener imagen actual
    imgActual = imagenActual(imagenes);
    console.log(`La imagen Actual es: ${imgActual}`);
    //Obtener Imagen Siguiente
    imgSiguiente = imagenSiguiente(imgActual, imagenes.length);
    console.log(`La imagen siguiente es ${imgSiguiente}`);
    // Prepara la imagen siguiente para el cambio
    imagenes[imgSiguiente].classList.remove("hidden");
    imagenes[imgSiguiente].style.opacity = "0%";
    testimonios[imgSiguiente].classList.remove("hidden");
    testimonios[imgSiguiente].style.opacity = "0%";
    //Cambia la imagen
    var tiempo = 500 / 5;
    setTimeout(() => {
        imagenes[imgActual].style.opacity = "80%";
        imagenes[imgSiguiente].style.opacity = "20%";
        testimonios[imgActual].style.opacity = "80%";
        testimonios[imgSiguiente].style.opacity = "20%";
        setTimeout(() => {
            imagenes[imgActual].style.opacity = "60%";
            imagenes[imgSiguiente].style.opacity = "40%";
            testimonios[imgActual].style.opacity = "60%";
            testimonios[imgSiguiente].style.opacity = "40%";
            setTimeout(() => {
                imagenes[imgActual].style.opacity = "40%";
                imagenes[imgSiguiente].style.opacity = "60%";
                testimonios[imgActual].style.opacity = "40%";
                testimonios[imgSiguiente].style.opacity = "60%";
                setTimeout(() => {
                    imagenes[imgActual].style.opacity = "20%";
                    imagenes[imgSiguiente].style.opacity = "80%";
                    testimonios[imgActual].style.opacity = "20%";
                    testimonios[imgSiguiente].style.opacity = "80%";
                    setTimeout(() => {
                        imagenes[imgActual].classList.add("hidden");
                        imagenes[imgSiguiente].style.opacity = "100%";
                        testimonios[imgActual].classList.add("hidden");
                        testimonios[imgSiguiente].style.opacity = "100%";
                    }, tiempo);
                }, tiempo);
            }, tiempo);
        }, tiempo);
    }, tiempo);
}

//Funcion siguienteImagen()
function btnAnterior() {
    //Declaracion de variables locales
    var imgActual, imgAnterior;

    console.log("Iniciando funcion btnAnterior()....");
    //Obtener imagen actual
    imgActual = imagenActual(imagenes);
    console.log(`La imagen Actual es: ${imgActual}`);
    //Obtener Imagen Anterior
    imgAnterior = imagenAnterior(imgActual, imagenes.length);
    console.log(`La imagen anterior es ${imgAnterior}`);
    // Prepara la imagen y los testimonios anteriores para el cambio
    imagenes[imgAnterior].classList.remove("hidden");
    imagenes[imgAnterior].style.opacity = "0%";
    testimonios[imgAnterior].classList.remove("hidden");
    testimonios[imgAnterior].style.opacity = "0%";
    //Cambia la imagen
    var tiempo = 500 / 5;
    setTimeout(() => {
        imagenes[imgActual].style.opacity = "80%";
        imagenes[imgAnterior].style.opacity = "20%";
        testimonios[imgActual].style.opacity = "80%";
        testimonios[imgAnterior].style.opacity = "20%";
        setTimeout(() => {
            imagenes[imgActual].style.opacity = "60%";
            imagenes[imgAnterior].style.opacity = "40%";
            testimonios[imgActual].style.opacity = "60%";
            testimonios[imgAnterior].style.opacity = "40%";
            setTimeout(() => {
                imagenes[imgActual].style.opacity = "40%";
                imagenes[imgAnterior].style.opacity = "60%";
                testimonios[imgActual].style.opacity = "40%";
                testimonios[imgAnterior].style.opacity = "60%";
                setTimeout(() => {
                    imagenes[imgActual].style.opacity = "20%";
                    imagenes[imgAnterior].style.opacity = "80%";
                    testimonios[imgActual].style.opacity = "20%";
                    testimonios[imgAnterior].style.opacity = "80%";
                    setTimeout(() => {
                        imagenes[imgActual].classList.add("hidden");
                        imagenes[imgAnterior].style.opacity = "100%";
                        testimonios[imgActual].classList.add("hidden");
                        testimonios[imgAnterior].style.opacity = "100%";
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

//Determina la imagen anterior
function imagenAnterior(actual, total) {
    if (actual === 0) {
        return total - 1;
    } else {
        return actual - 1;
    }
}