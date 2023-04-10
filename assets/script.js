const gameTitle = document.querySelector(".heading-title");
const gameContent = document.querySelector(".main-content");
const startP = document.querySelector("#start-p")
const start = document.querySelector(".start-button");
const timer = document.querySelector("#timer")
const questionBtn = document.querySelector(".button")
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
                {text: "2. curly brackets", correct: true},
                {text: "3. parenthesis", correct: true},
                {text: "4. square brackets", correct: false},
        ]
    },
]

let currentQuestionIndex = 0;

function changeContent() {
    startP.setAttribute("style", "display: none");
    start.setAttribute("style", "display: none");
    // countDownTimer();
    goNext();
    

    function goNext() {
        let currentQuestion = questions[currentQuestionIndex];
        gameTitle.innerHTML = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("button");
            gameContent.appendChild(button);
            console.log(currentQuestion.answers);
        function answerCheck(event) {
            if (currentQuestion)
        }
            
        questionBtn.addEventListener("click", answerCheck)
    });
  }
}

    // function countDownTimer() {
    //     var time = 75;
    //     var gameTimer = setInterval(function() {
    //     console.log(time);
    //         if (time <= 0) {
    //             timer.textContent = "Game Over";
    //             clearInterval(gameTimer);
    //         } else {
    //             timer.textContent = time--;
    //         }
    //     }, 1000);
// }




var startBtn = document.querySelector("#startBtn");
console.log(startBtn);

function startGame() {
    var page = changeContent();
}


startBtn.addEventListener("click", startGame);