'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Found ❗';
    displayMessage('No Number Found ❗');

    // When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Answer 🤩';
    displayMessage('Correct Answer 🤩');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is high
  } else if (guess > secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = `Lower than ${guess} 😐`;
        displayMessage(`Lower than ${guess} 😐`);
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lose 😶';
      }

      // When guess is low
    } 
    else if (guess < secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = `Higher than ${guess} 😐`;
        displayMessage(`Higher than ${guess} 😐`);
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'You lose 😶';
        displayMessage('You lose 😶');
      }
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#5900ff';
  document.querySelector('.number').style.width = '15rem';
});
