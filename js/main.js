
const radios = document.querySelectorAll(".form-check-input");
const labels = document.querySelectorAll(".form-check-label");

const textoPregunta = document.getElementById("textoPregunta");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contadorPregunta = document.getElementById("contadorPregunta");
const resumen = document.getElementById("resumen");
const listaResumen = document.getElementById("listaResumen");
const puntajeFinal = document.getElementById("puntajeFinal");


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
        mostrarResumen();
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
        btnAnterior.disabled = indiceActual === 0;
        btnSiguiente.textContent =
            indiceActual === preguntas.length - 1 ? "Finalizar" : "Siguiente →";
    });
}
//conservar respuestas
radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        respuestasUsuario[indiceActual] = index;
    });
});
//Muestra el resultado y las preguntas equivocadas
function mostrarResumen() {
    let aciertos = 0;

    let resultado = `
    <main class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h2 class="mb-4 text-center">Resumen del cuestionario</h2>
                            <ul class="list-group mb-3">
                    `;

    preguntas.forEach((pregunta, index) => {
        if (respuestasUsuario[index] === pregunta.correcta) {
            resultado += `
        <li class="list-group-item list-group-item-success">
            Pregunta ${index + 1}: Correcta
        </li>
        `;
            aciertos++;
        } else {
            resultado += `
        <li class="list-group-item list-group-item-danger">
            Pregunta ${index + 1}: Incorrecta
        </li>
        `;
        }
    });
    resultado += `
        </ul>
            <h4 class="text-center mb-4">
                Resultado final: ${aciertos} / ${preguntas.length}
            </h4>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary" onclick="reiniciarCuestionario()">
                        Reintentar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
`;

    document.body.innerHTML = resultado;
}


function reiniciarCuestionario() {
    location.reload();
}

window.onload = function () {
    mostrarPregunta();
};
