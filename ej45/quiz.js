const questions = [
    {
        question: "¿Cuál es la capital de España?",
        answers: ["Madrid", "Barcelona", "Sevilla"],
        correct: 0
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Amazonas", "Nilo", "Misisipi"],
        correct: 1
    },
    {
        question: "¿Cuál es el planeta más cercano al Sol?",
        answers: ["Venus", "Mercurio", "Marte"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let startTime;
let countdownInterval;
const TIEMPO_RESPUESTA = 5;

document.getElementById('b-comenzar').addEventListener('click', function () {
    startTime = new Date();
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz("¡Felicidades! Has completado el test.");
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = ""; // Limpia respuestas previas

    questionObj.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersDiv.appendChild(button);
    });

    startCountdown();
}

function checkAnswer(selectedIndex) {
    clearInterval(countdownInterval); // Detiene el temporizador

    const questionObj = questions[currentQuestionIndex];
    if (selectedIndex === questionObj.correct) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz("Respuesta incorrecta. Test terminado.");
    }
}

function startCountdown() {
    let tiempo = TIEMPO_RESPUESTA;
    document.getElementById('s-tiempo').innerText = tiempo;

    clearInterval(countdownInterval); // Limpia temporizadores previos
    countdownInterval = setInterval(() => {
        tiempo--;
        document.getElementById('s-tiempo').innerText = tiempo;

        if (tiempo <= 0) {
            clearInterval(countdownInterval);
            endQuiz("Se acabó el tiempo. Test terminado.");
        }
    }, 1000);
}

function endQuiz(message) {
    const endTime = new Date();
    const timeElapsed = ((endTime - startTime) / 1000).toFixed(2);
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-time').innerText = `Tiempo total: ${timeElapsed} segundos.`;
    document.getElementById('result').classList.remove('hidden');
}
