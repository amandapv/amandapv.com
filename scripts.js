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

    if (ajuste1.clientHeight > ajuste2.clientHeight) {
        ajuste2.style.height = ajuste1.clientHeight + "px";
        return ajuste1.clientHeight;
    } else {
        ajuste1.style.height = ajuste2.clientHeight + "px";
        return ajuste2.clientHeight
    }


}
ajustarpt2()




function main() {

    let ventanaFrontal = document.getElementsByClassName('flip-card-front');
    let ventanaTrasera = document.getElementsByClassName('flip-card-back');
    ajustarTamano(ventanaFrontal[0], ventanaTrasera[0])


    let izquierda = document.getElementById('listaproyectos');
    let derecha = document.getElementById('listalenguajes');
    ajustarTamano(izquierda, derecha)

    let identidad = document.getElementById('identidad');
    let presentacion = document.getElementById('fondopresent');
    ajustarTamano(identidad, presentacion)

    let div1 = document.getElementsByClassName('flip-card')
    let div2 = document.getElementById('listalenguajes')
    ajustarpt2(div1, div2)

    let trans = document.getElementsByClassName('flip-card-back')

    /*var dato1 = sumar(1,2);
    var dato2 = sumar(23, 5);
    var dato3 = sumar(5, 7);*/

}
main();
 