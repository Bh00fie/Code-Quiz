// Declaring variables using ID from HTML
var time = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questions = document.getElementById("questions");
var questionTitle= document.getElementById("question-title");
var choices= document.getElementById("choices");
var endScreen= document.getElementById("end-screen");
var finalScore= document.getElementById("final-score");
var userName = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var feedback = document.getElementById("feedback");

var choiceList = [];
var questionIndex = 0
var timeLeft = 75;
var winAudio = new Audio("./assets/sfx/correct.wav");
var loseAudio = new Audio("./assets/sfx/incorrect.wav");

// Timer function to control time and stop the game if the score is lower than 0 or if time has finished
function timer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;
        if (timeLeft <= 0 || questionIndex === Object.keys(questionObj).length) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}