var takeQuizBtn = document.getElementById("take-quiz");
var clearScoresBtn = document.getElementById("clear-scores");
var highScoresObj = localStorage.getItem("JSQuizHighScores");
var highScores = document.getElementById("answers");

function sortHighScores() {
    highScoresObj = highScoresObj.sort(function(a, b){
        return b.score - a.score
      });
};

function getHighScores() {
    if (!highScoresObj) {
        return;
    }
    highScoresObj = JSON.parse(highScoresObj);
    sortHighScores();
    for (var i = 0; i < highScoresObj.length; i++) {
        var listing = document.createElement("div");
        var listingCount = i + 1
        listing.innerText = `${listingCount}) ${highScoresObj[i].initials} - ${highScoresObj[i].score}`;
        highScores.appendChild(listing);
    }
};

function takeQuiz() {
    location.assign("index.html");
};

function clearScores() {
    highScores.remove();
    localStorage.clear();
};

getHighScores();
takeQuizBtn.addEventListener("click", takeQuiz);
clearScoresBtn.addEventListener("click", clearScores);