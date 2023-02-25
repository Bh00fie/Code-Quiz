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

// Function to toggle elements to hide or display, this helps to go from the Start screen to the question screen and to finally go the to highscore screen
function toggleHide(element) {
    if (element.classList.contains("feedback") && element.classList.contains("hide")) {
        element.setAttribute("class", "feedback");
    }
    else if (element.classList.contains("feedback")) {
        element.setAttribute("class", "feedback hide");
    }
    else if (element.classList.contains("start")) {
    element.setAttribute("class", "hide");
    } 
    else if (element.classList.contains("hide")) {
        element.setAttribute("class", "start");
    }
}

// Function to start the game
var startGame = function() {
    timer();
    toggleHide(startScreen);
    toggleHide(questions);
    questionIndex = 0;
    generateQuestion(questionObj[questionIndex]);
}

// For loop to create answers button for the user to select
for (var i = 0; i< 4; i++) {
    var choiceBtn = document.createElement("button");
    choiceList.push(choiceBtn);
    choices.appendChild(choiceList[i]);
}
