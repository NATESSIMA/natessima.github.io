
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
let questionStartTime;
let timer;

document.getElementById('start-button').addEventListener('click', function() {
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
    answersDiv.innerHTML = "";
    questionObj.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersDiv.appendChild(button);
    });

    // Начинаем таймер
    questionStartTime = new Date();
    clearTimeout(timer);
    timer = setTimeout(() => {
        endQuiz("Время на ответ истекло. Тест завершен.");
    }, 5000);
}

function checkAnswer(selectedIndex) {
    clearTimeout(timer); // Останавливаем таймер
    const questionObj = questions[currentQuestionIndex];
    if (selectedIndex === questionObj.correct) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz("Ответ неверный. Тест завершен.");
    }
}

function endQuiz(message) {
    const endTime = new Date();
    const timeElapsed = (endTime - startTime) / 1000;
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').innerText = `${message} Время, прошедшее с начала теста: ${timeElapsed} секунд.`;
    document.getElementById('result').classList.remove('hidden');
}

window.onload = function() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
};