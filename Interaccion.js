/* ==================================
   CONSEJOS SOBRE GATOS
================================== */

const consejos = [

    "Los gatos necesitan tener siempre disponible agua limpia y fresca.",

    "Jugá con tu gato todos los días para estimular su actividad física y mental.",

    "Mantené limpio su arenero para que se sienta cómodo y evitar problemas de higiene.",

    "Los gatos necesitan lugares tranquilos donde puedan descansar sin ser molestados.",

    "Los controles veterinarios periódicos ayudan a detectar problemas de salud a tiempo.",

    "El cepillado regular ayuda a mantener el pelaje limpio y reduce la cantidad de pelo que puede ingerir.",

    "Nunca le des medicamentos humanos a un gato sin indicación de un veterinario."

];


const botonConsejo = document.getElementById("botonConsejo");
const textoConsejo = document.getElementById("textoConsejo");


let ultimoConsejo = -1;


botonConsejo.addEventListener("click", function () {

    let nuevoConsejo;

    do {
        nuevoConsejo = Math.floor(Math.random() * consejos.length);
    } while (nuevoConsejo === ultimoConsejo && consejos.length > 1);


    ultimoConsejo = nuevoConsejo;

    textoConsejo.style.opacity = "0";


    setTimeout(function () {

        textoConsejo.textContent = consejos[nuevoConsejo];

        textoConsejo.style.opacity = "1";

    }, 200);

});


/* ==================================
   ANIMACIÓN DEL CONSEJO
================================== */

textoConsejo.style.transition = "opacity 0.2s ease";


/* ==================================
   ANIMACIÓN AL HACER SCROLL
================================== */

const elementos = document.querySelectorAll(
    ".tarjeta, .cuidado, .alimento, .dato"
);


const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});