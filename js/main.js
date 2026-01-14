
const radios = document.querySelectorAll(".form-check-input");
const labels = document.querySelectorAll(".form-check-label");

const textoPregunta = document.getElementById("textoPregunta");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contadorPregunta = document.getElementById("contadorPregunta");



let indiceActual = 0;
let respuestasUsuario = [];

//arreglo de objetos con preguntas
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Madrid", "París", "Roma", "Berlín"],
        correcta: 1
    },
    {
        pregunta: "¿Cuánto es 2 + 2?",
        opciones: ["3", "4", "5", "6"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el lenguaje que se ejecuta en el navegador?",
        opciones: ["Java", "Python", "JavaScript", "C++"],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Marte", "Júpiter", "Saturno", "Neptuno"],
        correcta: 1
    },
    {
        pregunta: "¿Cuántos continentes existen?",
        opciones: ["5", "6", "7", "8"],
        correcta: 2
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Pablo Neruda", "Miguel de Cervantes", "Gabriel García Márquez", "Julio Cortázar"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 9 × 3?",
        opciones: ["18", "21", "27", "30"],
        correcta: 2
    },
    {
        pregunta: "¿Qué tipo de animal es la ballena?",
        opciones: ["Pez", "Reptil", "Mamífero", "Anfibio"],
        correcta: 2
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        opciones: ["Europa", "Asia", "África", "América"],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es el símbolo químico del agua?",
        opciones: ["O2", "CO2", "H2O", "HO"],
        correcta: 2
    }
];

//botones anterior y siguiente
btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});


btnSiguiente.addEventListener("click", () => {
    if (indiceActual < preguntas.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});
//funcion para actualizar las preguntas
function mostrarPregunta() {
    const pregunta = preguntas[indiceActual];
    textoPregunta.textContent = pregunta.pregunta;
    contadorPregunta.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;

    radios.forEach((radio, index) => {
        radio.checked = false;
        labels[index].textContent = pregunta.opciones[index];

        if (respuestasUsuario[indiceActual] === index) {
            radio.checked = true;
        }
    });
}

radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        respuestasUsuario[indiceActual] = index;
    });

    window.onload = function () {
        mostrarPregunta();
    };


});