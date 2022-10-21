'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'Not a number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low';
    }

});
