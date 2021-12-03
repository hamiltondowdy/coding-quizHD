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
            currentTime.textContent = "Time's Up!";
        }
    }, 1000);
}
    return(questionIndex);
});


