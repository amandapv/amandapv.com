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

    if (frontal.clientHeight > trasera.clientHeight) {  
         trasera.style.height = frontal.clientHeight + "px";
         return frontal.clientHeight;
    } else {
        frontal.style.height = trasera.clientHeight + "px";
        return trasera.clientHeight
    }
    
}

/* #######################################
 * Pendiente, una función que dados 2 div:
 *        1) obtenga la altura del primero y lo guarde en una variable
 *        2) modifique la altura del segundo para ser igual a la variable
 *        3) modifique el css del segundo para ser:    transform: rotateY(180deg) translateY(-50%) translateY({{VARIABLEAQUI}}px);
##########################################*/




function ajustarpt2(ajuste1, ajuste2) {

    let altura = ajuste1.clientHeight
    ajuste2.style.height = altura + "px";
    ajuste2.style.transform = 'rotateY(180deg) translateY(-50%) translateY(-'+ altura +'px)';
    console.log('rotateY(180deg) translateY(-50%) translateY(-'+ altura +'px)');
}




function main() {
    if(document.width < 1600) {
        /* MODO ESCRITORIO */
        let ventanaFrontal = document.getElementsByClassName('flip-card-front');
        let ventanaTrasera = document.getElementsByClassName('flip-card-back');
        ajustarTamano(ventanaFrontal[0], ventanaTrasera[0])

        let izquierda = document.getElementById('listaproyectos');
        let derecha = document.getElementById('listalenguajes');
        ajustarTamano(izquierda, ventanaTrasera[0]);
        ajustarTamano(izquierda, derecha);

        let identidad = document.getElementById('identidad');
        let presentacion = document.getElementById('fondopresent');
        ajustarTamano(identidad, presentacion);

        ajustarpt2(ventanaFrontal[0], ventanaTrasera[0]);
        
    } else {
        /* MODO MÓVIL */

        let ventanaFrontal = document.getElementsByClassName('flip-card-front');
        let ventanaTrasera = document.getElementsByClassName('flip-card-back');
        ajustarTamano(ventanaFrontal[0], ventanaTrasera[0])

        let izquierda = document.getElementById('listaproyectos');
        ajustarTamano(izquierda, ventanaTrasera[0]);
        ajustarpt2(ventanaFrontal[0], ventanaTrasera[0]);
    }
}
main();

document.addEventListener('resize', main());