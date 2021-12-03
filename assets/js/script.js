var questions [ 
    {
        title: "1text text?",
        choices: ["text", "text", "text", "text"],
        answer: "Text"
    },
    {
        title: "2text text?",
        choices: ["text", "text", "text", "text"],
        answer: "Text"
    },
    {
        title: "3text text?",
        choices: ["text", "text", "text", "text"],
        answer: "Text"
    },
    {
        title: "4text text?",
        choices: ["text", "text", "text", "text"],
        answer: "Text"
    },
    {
        title: "5text text?",
        choices: ["text", "text", "text", "text"],
        answer: "Text"
    },
];

var score = 0;
var questionIndex = 0;

var currTime = document.querySelector("#currtime");
var timer = document.querySelector("#timer");
var quizQuestions = document.querySelector("#quizQuestions");
var wrapper = document.querySelector("#wrapper");