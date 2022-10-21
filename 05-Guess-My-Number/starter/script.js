"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const updateScore = function (score) {
    document.querySelector(".score").textContent = score;
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
        } else if (guess === secretNumber) {
            displayMessage("Correct number!");
            highScore = document.querySelector(".score").textContent;
            document.querySelector(".highscore").textContent = highScore;
        } else if (guess != secretNumber) {
            guess > secretNumber
                ? displayMessage("Too high")
                : displayMessage("Too low");
            score--;
            updateScore(score);
        }
    }
});
