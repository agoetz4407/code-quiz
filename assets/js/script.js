//Declaring global variables
var quizWrapper = document.querySelector("#content-wrapper");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var footer = document.querySelector("#footer");
var startButton = document.getElementById("start-quiz");
var timer = document.getElementById("timer");
var startTime = 60;
var time = startTime;
var questionArr = [
    {
        question: "Which one of the following is NOT a data type in Javascript?",
        answerA: "booleans",
        answerB: "strings",
        answerC: "numbers",
        answerD: "alerts",
        correctAnswer : "alerts"
    },
    {
        question: "Arrays can be used to store which of the following?",
        answerA: "objects",
        answerB: "strings",
        answerC: "booleans",
        answerD: "all of the above",
        correctAnswer : "all of the above"
    },
    {
        question: "What is the statement used to bring up the debugger in the browser?",
        answerA: "console.log",
        answerB: "debugger",
        answerC: "help",
        answerD: "debug",
        correctAnswer : "debugger"
    },
    {
        question: "What is used to enclose the conditions of if/else statements?",
        answerA: "curly brackets",
        answerB: "parenthesis",
        answerC: "square brackets",
        answerD: "quotation marks",
        correctAnswer : "parenthesis"
    },
    {
        question: "Which statement will ask the user for a text input?",
        answerA: "prompt",
        answerB: "alert",
        answerC: "confirm",
        answerD: "text",
        correctAnswer : "prompt"
    },
    {
        question: "What syntax is used to start a comment in Javascript?",
        answerA: "//",
        answerB: "[[",
        answerC: "{{",
        answerD: "??",
        correctAnswer : "//"
    },
];

//functions


var startQuiz = function(target) {
    startButton.remove();
}

startButton.addEventListener("click", startQuiz);
