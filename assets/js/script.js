var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal / Bash", "for loops", "console log"],
        answer: "console log"
    },
];

var score = 0;
var questionIndex = 0;

var currTime = document.querySelector("#currtime");
var timer = document.querySelector("#timer");
var quizQuestions = document.querySelector("#quizQuestions");
var wrapper = document.querySelector("#wrapper");


// Seconds left from start (15 per question + 2)
var secondsLeft = 77;

// Interval time
var holdInterval = 0;

// Hold penalty time
var holdPenalty = 10;

// Creat Element - unordered list
var ulCreate = document.createElement("ul");

// Adding functionality to button
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
        secondsLeft--;
        currTime.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft <= 0) {
            clearIntercal(holdInterval);
            allDone();
            currTime.textContent = "Time's Up!";
        }
    }, 1000);
}
    render(questionIndex);
});

// Adding Questions to webpage
function render(questionIndex) {
    quizQuestions.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        quizQuestions.textContent = userQuestion;
    }

    userChoices.forEach(function (newQ) {
        var listQ = document.createElement("li");
        listQ.textContent = newQ;
        quizQuestions.appendChild(ulCreate);
        ulCreate.appendChild(listQ);
        listQ.addEventListener("click", (compare));
    })

}

// Function to compare answer vs answer
function compare(event) {
    var element = event.target;

    if(element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct Answer If
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Good Answer! A: " + questions[questionIndex].answer;
        } else {
            secondsLeft = secondsLeft - holdPenalty;
            createDiv.textContent = "Nope! A: " +questions[questionIndex].answer;
        }
        }

        questionIndex++;

        if (questionIndex >= questions.length) {
            allDone();
            createDiv.textContent = "Pencil's Down. You scored: " + score + "/" + questions.length + " Correct.";
        } else {
            render(questionIndex);
        }
        quizQuestions.appendChild(createDiv);
    }


// Append page
function allDone() {
    quizQuestions.innerHTML = "";
    currTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Done!"

    quizQuestions.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    quizQuestions.appendChild(createP);
}
