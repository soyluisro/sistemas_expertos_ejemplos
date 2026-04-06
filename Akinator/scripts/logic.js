let step = 0;
let isDeportista = null;
let isFutbol = null;
let isAmericano = null;

const questionEl = document.getElementById("question");
const answersDiv = document.getElementById("buttons");

function startGame() {
    step = 0;
    questionEl.innerText = "¿Tu personaje es deportista?";
    answersDiv.innerHTML = `
        <button onclick="answer(true)">Sí</button>
        <button onclick="answer(false)">No</button>
    `;
}

function showResult(text) {
    questionEl.innerHTML = `Tu personaje es: <strong>${text}</strong>`;
    answersDiv.innerHTML = `
        <button onclick="location.reload()">Jugar otra vez 🔄</button>
    `;
}

function answer(res) {

    if (step === 0) {
        isDeportista = res;
        step++;
        questionEl.innerText = isDeportista
            ? "¿Es jugador de fútbol?"
            : "¿Es político?";
    }

    else if (step === 1 && isDeportista) {
        isFutbol = res;
        step++;
        questionEl.innerText = isFutbol
            ? "¿Es argentino?"
            : "¿Es americano?";
    }

    else if (step === 2 && isDeportista && isFutbol) {
        if (res) {
            showResult("Messi");
        } else {
            questionEl.innerText = "¿Es portugués?";
            step++;
        }
    }

    else if (step === 3 && isDeportista && isFutbol) {
        showResult(res ? "Cristiano Ronaldo ⚽" : "No identificado");
    }

    else if (step === 2 && isDeportista && !isFutbol) {
        showResult(res ? "LeBron James" : "No identificado");
    }

    else if (step === 1 && !isDeportista) {
        if (res) {
            questionEl.innerText = "¿Es de USA?";
            step++;
        } else {
            showResult("No identificado");
        }
    }

    else if (step === 2 && !isDeportista) {
        if (res) {
            questionEl.innerText = "¿Es presidente?";
            step++;
        } else {
            showResult("No identificado");
        }
    }

    else if (step === 3 && !isDeportista) {
        showResult(res ? "Donald Trump" : "Charlie Kirk");
    }
}
