//Declaring global variables
var quizWrapper = document.querySelector("#content-wrapper");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var footer = document.querySelector("#footer");
var startButton = document.getElementById("start-quiz");
var answerResult = document.createElement("div");
answerResult.setAttribute("class", "answer-result");
var questionCounter = 0;
var timer = document.getElementById("timer");
var startTime = 60;
var time = startTime;
var intervalId;
timer.innerText = time;
var questionArr = [
    {
        question: "Which one of the following is NOT a data type in Javascript?",
        answerA: "A: booleans",
        answerB: "B: strings",
        answerC: "C: numbers",
        answerD: "D: alerts",
        correctAnswer : "D: alerts"
    },
    {
        question: "Arrays can be used to store which of the following?",
        answerA: "A: objects",
        answerB: "B: strings",
        answerC: "C: booleans",
        answerD: "D: all of the above",
        correctAnswer : "D: all of the above"
    },
    {
        question: "What is the statement used to bring up the debugger in the browser?",
        answerA: "A: console.log",
        answerB: "B: debugger",
        answerC: "C: help",
        answerD: "D: debug",
        correctAnswer : "B: debugger"
    },
    {
        question: "What is used to enclose the conditions of if/else statements?",
        answerA: "A: curly brackets",
        answerB: "B: parenthesis",
        answerC: "C: square brackets",
        answerD: "D: quotation marks",
        correctAnswer : "B: parenthesis"
    },
    {
        question: "Which statement will ask the user for a text input?",
        answerA: "A: prompt",
        answerB: "B: alert",
        answerC: "C: confirm",
        answerD: "D: text",
        correctAnswer : "A: prompt"
    },
    {
        question: "What syntax is used to start a comment in Javascript?",
        answerA: "A: //",
        answerB: "B: [[",
        answerC: "C: {{",
        answerD: "D: ??",
        correctAnswer : "A: //"
    },
];

//functions

var checkAnswer = function(event) {
    var clickedAnswer = event.target.innerText;
    if (clickedAnswer === questionArr[questionCounter].correctAnswer) {
        answerResult.innerText = "Correct!"
    }
    else {
        answerResult.innerText = "Wrong!"
    }
    questionCounter++;
    clearQuiz();
    generateQuestion();
    footer.appendChild(answerResult);

};

var clearQuiz = function() {
    question.innerHTML = "";
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    };
};

var generateQuestion = function() {
    question.innerText = questionArr[questionCounter].question;
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");
    buttonA.innerText = questionArr[questionCounter].answerA;
    buttonB.innerText = questionArr[questionCounter].answerB;
    buttonC.innerText = questionArr[questionCounter].answerC;
    buttonD.innerText = questionArr[questionCounter].answerD;
    buttonA.addEventListener("click", checkAnswer);
    buttonB.addEventListener("click", checkAnswer);
    buttonC.addEventListener("click", checkAnswer);
    buttonD.addEventListener("click", checkAnswer);
    answers.appendChild(buttonA);
    answers.appendChild(buttonB);
    answers.appendChild(buttonC);
    answers.appendChild(buttonD);
};


var quizEnd = function() {
    clearInterval(intervalId);

    var playAgain = confirm("Would you like to try again?");
    if (playAgain) {
        window.location.reload();
    };

}

var startQuiz = function(target) {
    startButton.remove();
    quizWrapper.classList.remove("text-center");
    intervalId = setInterval(function() {
        time--
        timer.innerText = time
        if (time === 0) {
            quizEnd();
        }
    }, 1000);
    clearQuiz();
    generateQuestion();
}

startButton.addEventListener("click", startQuiz);
