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
console.log (sumar (1,2))

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
    console.log(frontal.clientHeight);
    //console.log(ventanaFrontal[0].clientWidth);

    console.log(ventanaTrasera[0].clientHeight);
    //console.log(ventanaTrasera[0].clientWidth);
}





let ventanaFrontal = document.getElementsByClassName('flip-card-front');
let ventanaTrasera = document.getElementsByClassName('flip-card-inner');
ajustarTamano(ventanaFrontal[0], ventanaTrasera)



let izquierda = document.getElementById('listaproyectos');
let derecha = document.getElementById('listalenguajes');
ajustarTamano(izquierda, derecha)