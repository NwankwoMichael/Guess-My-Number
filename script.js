'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const random = function (range) {
  return Math.trunc(Math.random() * range) + 1;
};

const displayText = function (el, value) {
  return (document.querySelector(el).textContent = value);
};

const displayValue = function (el, value) {
  return (document.querySelector(el).value = value);
};

const styleManipulator = function (el, property, value) {
  return (document.querySelector(el).style[property] = value);
};

let secretNumber = random(20);
let score = 20;
let highScore = 0;

// Listening for the click event & implementing the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayText(`.message`, '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayText(`.number`, secretNumber);
    displayText(`.message`, '🎉 Correct Number');
    styleManipulator(`body`, `backgroundColor`, `#60b347`);
    styleManipulator(`.number`, `width`, `30rem`);

    // Highscore update
    if (highScore < score) highScore = score;
    displayText(`.highscore`, highScore);

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // When guess is too high || too low
      const msg = guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      displayText(`.message`, msg);

      score--;
      displayText(`.score`, score);
    } else {
      displayText(`.message`, `💥 You lost the game!`);
      displayText(`.score`, 0);
    }
  }
});

// Implementing the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = random(20);
  styleManipulator(`body`, `backgroundColor`, `#222`);
  styleManipulator(`.number`, `width`, `15rem`);
  displayText(`.number`, `?`);
  displayText(`.message`, `Start guessing...`);
  displayValue(`.guess`, ``);
  displayText(`.score`, score);
});
