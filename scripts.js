/*var miTitulo = document.getElementById('bloqueborde');
miTitulo.textContent = 'Hola Mundo!';*/

/*var hola = 'Amanda';
console.log(hola)

if (hola !== 'Adrian') {
    console.log ('igual');
} else {
    console.log ('diferente');
}
function sumar(a, b) {
    let suma = a + b;
    return suma;
}

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Deja de pincharme!');
}*/

/*let miHTML = document.getElementById('fondoimagen')
let hijo = miHTML.firstElementChild
hijo.onclick = function () {
    alert('Ouch! Deja de pincharme!');
}

let miImagen = document.querySelector('img');
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === '/home/agonbar/Documents/projects/amandaperezvazquez/wallstarwars.jpg') {
        miImagen.setAttribute('src','/home/agonbar/Documents/projects/amandaperezvazquez/avatar.jpg');
    } else {
        miImagen.setAttribute('src', '/home/agonbar/Documents/projects/amandaperezvazquez/wallstarwars.jpg');
    }
} */

/*let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h3');

function nombreUser() {
    let miNombre = prompt('Por favor, ingrese su nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
    if (!localStorage.getItem('nombre')) {
        nombreUser();
    } 
    else {
        let nombreAlmacenado = localStorage.getItem('nombre');
        miTitulo.textContent = 'Modzilla es genial,' + nombreAlmacenado;
    }
}

miBoton.onclick = function () {
    nombreUser();
}

function nombreUser() {
    let miNombre = prompt('Introduzca su nombre')
    if(!miNombre) {
        nombreUser();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Modzilla is genial, ' + miNombre
    }
}*/

function ajustarTamano(frontal, trasera) {
    frontal.style.height = "";
    trasera.style.height = "";
    if (frontal.clientHeight > trasera.clientHeight) {  
         trasera.style.height = frontal.clientHeight + "px";
         return frontal.clientHeight;
    } else {
        frontal.style.height = trasera.clientHeight + "px";
        return trasera.clientHeight
    }
    
}


function ajustarpt2(ajuste1, ajuste2) {
    ajustarTamano(ajuste1, ajuste2);
    let altura = ajuste1.clientHeight;
    ajuste2.style.transform = 'translateY(-50%) translateY(-'+ altura +'px) rotateY(180deg)';
}

function boton(div1, bool) {
    if(bool) {
        div1.style.transform = 'rotateY(180deg)';
    } else {
        div1.style.transform = 'none';
    } 
}



function main() {
    /* Iguala las caras de las tarjetas */
    let ventanaFrontal = document.getElementsByClassName('flip-card-front');
    let ventanaTrasera = document.getElementsByClassName('flip-card-back');
    let tarjeta1 = document.getElementsByClassName('flip-card-inner');
    tarjeta1[0].style.height = ajustarTamano(ventanaFrontal[0], ventanaTrasera[0]) + "px";
    

    /* Iguala las tarjetas a su contenedor */
    let izquierda = document.getElementById('listaproyectos');
    let derecha = document.getElementById('listalenguajes');
    ajustarTamano(izquierda, ventanaTrasera[0]) + "px";

    if(document.width > 992) {
        /* MODO ESCRITORIO */
        ajustarTamano(izquierda, derecha);

        let identidad = document.getElementById('identidad');
        let presentacion = document.getElementById('fondopresent');
        ajustarTamano(identidad, presentacion);
    }

    ajustarpt2(ventanaFrontal[0], ventanaTrasera[0]);

    let habilitar = document.getElementsByClassName('habilitar');
    let deshabilitar = document.getElementsByClassName('deshabilitar');

    habilitar[0].addEventListener("click", function() {
        boton(tarjeta1[0], true);
    });
    deshabilitar[0].addEventListener("click", function() {
        boton(tarjeta1[0], false);
    });
}
main();

/* Llama a main cuando cambia el tamaño de ventan */
window.onresize = main;