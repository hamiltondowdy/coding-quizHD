var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

/// Clear scores button

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Retrieve Scores
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].nickname + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Back button

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});