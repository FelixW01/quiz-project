const highScore = document.querySelector("#scores");
const initialsStorage = localStorage.getItem("initials");
const scoreStorage = localStorage.getItem("score");
const initials = JSON.parse(initialsStorage);
const score = JSON.parse(scoreStorage);
const goBackBtn = document.querySelector("#back");
const clearBtn = document.querySelector("#clear");



for (let i = 0; i < initials.length; i++) {
    let newHighScore = document.createElement("li");
    newHighScore.textContent = initials[i] + " - " + score[i];
    highScore.appendChild(newHighScore);
}

function clearScore() {
    localStorage.clear();
    location.reload();
}

function goBack() {
    window.location.href = "index.html";
}


goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearScore);