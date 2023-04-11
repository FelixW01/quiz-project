const gameTitle = document.querySelector(".heading-title");
const gameContent = document.querySelector(".main-content");
const startP = document.querySelector("#start-p")
const start = document.querySelector(".start-button");
const timer = document.querySelector("#timer");
const validation = document.querySelector(".answer-validation")
let validationHr = document.createElement("hr")
let validationH1 = document.createElement("h1")
let time = 75;

const questions = [ 
        {
            question: "Commonly used data types DO Not Include: ",
            answers: [ 
                {text: "1. strings",  correct: false},
                {text: "2. booleans", correct: false},
                {text: "3. alerts", correct: true},
                {text: "4. numbers", correct: false},
        ]
    },
    {
            question: "The condition in an if / else statement is enclosed with ________. ",
            answers: [ 
                {text: "1. quotes",  correct: false},
                {text: "2. curly brackets", correct: false},
                {text: "3. parenthesis", correct: true},
                {text: "4. square brackets", correct: false},
        ]
    },
    {
            question: "Arrays in Javascript can be used to store ",
            answers: [ 
                {text: "1. numbers and strings",  correct: false},
                {text: "2. other arrays", correct: false},
                {text: "3. booleans", correct: false},
                {text: "4. all of the above", correct: true},
    ]
    },
    {
            question: "String values must be enclosed within _____ when being assigned to variables. ",
            answers: [ 
                {text: "1. commas",  correct: false},
                {text: "2. curly brackets", correct: false},
                {text: "3. quotes", correct: true},
                {text: "4. parenthesis", correct: false},
    ]  
    },
    {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:  ",
            answers: [ 
                {text: "1. JavaScript",  correct: false},
                {text: "2. terminal/bash", correct: false},
                {text: "3. for loops", correct: false},
                {text: "4. console.log", correct: true},
    ]
    },
]

let currentQuestionIndex = 0;

function changeContent() {
    startP.setAttribute("style", "display: none");
    start.setAttribute("style", "display: none");
    countDownTimer(); 
    goNext();
    
    function countDownTimer() {
        var gameTimer = setInterval(function() {
        console.log(time);
            if (time <= 0) {
                timer.textContent = "Game Over";
                clearInterval(gameTimer);
            } else {
                timer.textContent = "Time: " + time--;
            }
        }, 1000);
    }

    //changes question text
    function goNext() {
        
        var currentQuestion = questions[currentQuestionIndex];
        gameTitle.innerHTML = currentQuestion.question;
        currentQuestionIndex ++;
        
        //makes buttons from questions array
        currentQuestion.answers.forEach(answer => {
            let button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("button");
            gameContent.appendChild(button);
            console.log(currentQuestion.answers);
        });

        const questionBtns = document.querySelectorAll(".button");
        console.log(questionBtns)
        questionBtns.forEach(btn => btn.addEventListener("click", answerCheck));

         function removeBtns() {
            questionBtns.forEach(btn => btn.style.display = "none");
        }

        //checks if the clicked answer is correct
         function answerCheck(event) { 

            const selectedAnswer = event.target;
            const isTrue = q => (q.text === selectedAnswer.innerHTML)
            if (currentQuestion.answers[currentQuestion.answers.findIndex(isTrue)].correct) { 
                validationH1.textContent = "Correct!"
                validation.appendChild(validationHr)
                validation.appendChild(validationH1)
                removeBtns()
                goNext()
                // add "correct!" h2 on html
            } else {
                validationH1.textContent = "Wrong!"
                validation.appendChild(validationHr)
                validation.appendChild(validationH1)
                time = time -10
                removeBtns()
                goNext()
            }
        }
     }
}



var startBtn = document.querySelector("#startBtn");

function startGame() {
    var page = changeContent();
}


startBtn.addEventListener("click", startGame);