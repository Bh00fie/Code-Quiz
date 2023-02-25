// Declaring variables using ID from HTML
var highscoreList = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");

// Function to retrive stored initials and scores
function showHighscores() {
    var previousScore = JSON.parse(localStorage.getItem("scores"));

    // Sorting the scores into descending order
    if (previousScore !== null) {
        previousScore.sort(function(a,b) {
            return b.score - a.score;
        });

        // Clearing existing high scores
        highscoreList.innerHTML = "";

        // Writing the list of scores onto the page
        for (var i = 0; i < previousScore.length; i++){
            var listScore = document.createElement("li");
            highscoreList.appendChild(listScore);
            listScore.textContent = previousScore[i].initials + " - " + previousScore[i].score;
        }
    }
}