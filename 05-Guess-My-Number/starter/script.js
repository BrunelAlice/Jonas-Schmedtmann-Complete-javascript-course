"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const updateScore = function (score) {
    document.querySelector(".score").textContent = score;
};

const updateHighscore = function (newScore) {
    if (newScore > highScore) {
        highScore = newScore;
        document.querySelector(".highscore").textContent = highScore;
    } else {
        document.querySelector(".highscore").textContent = highScore;
    }
};


document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (score <= 1) {
        displayMessage("You loose");
        score = 0;
        updateScore(score);
    } else {
        if (!guess) {
            displayMessage("Not a number");
        } else if (guess != secretNumber) {
            guess > secretNumber
                ? displayMessage("Too high")
                : displayMessage("Too low");
            score--;
            updateScore(score);
        } else if (guess === secretNumber) {
            displayMessage("Correct number!");
            let newScore = score;
            updateHighscore(newScore);
            return;
        } 
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    updateScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    displayMessage("Start guessing...");
});

