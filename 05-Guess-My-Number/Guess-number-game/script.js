'use strict';

let number;
let score_value = 20;
let try_count = 0;
let highscore = 0;

document.addEventListener('DOMContentLoaded', e => {
  const check = document.querySelector('.btn.check');
  const guessInput = document.querySelector('.guess');
  const score = document.querySelector('.score');
  const againBtn = document.querySelector('.again');
  const highscoreDisplay = document.querySelector('.highscore');
  const message = document.querySelector('.message');

  GameInit();

  check.addEventListener('click', () => {
    try_count++;
    if (score_value == 0) {
      message.textContent = '💥 You lost the game!';
      score_value = 20;
      score.textContent = score_value;
      document.querySelector('body').style.backgroundColor = '#640202ff';

      return;
    }

    if (guessInput.value == '') {
      message.textContent = '⛔ No number!';
    } else if (guessInput.value < 1 || guessInput.value > 20) {
      message.textContent = '⛔ Number must be between 1 and 20!';
    } else if (guessInput.value == number) {
      message.textContent = '🎉 Correct Number!';
      score_value = +score_update(try_count);
      score.textContent = score_value;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = number;

      if (score_value > highscore) {
        highscore = score_value;
        highscoreDisplay.textContent = highscore;
      }
    } else if (guessInput.value != number) {
      if (score_value > 0) {
        score_value--;
        score.textContent = score_value;
        message.textContent =
          guessInput.value < number ? '📉 Too low!' : '📈 Too high!';
      }
    }
  });

  againBtn.addEventListener('click', () => {
    GameInit();
    score.textContent = score_value;
    try_count = 0;
  });

  guessInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      check.click();
    }
  });
});

function GameInit() {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Make your guess..';
  document.querySelector('body').style.backgroundColor = '#2b057b';
}

function score_update(try_count) {
  if (try_count > 20) {
    return 0;
  } else if (try_count <= 20 && try_count > 15) {
    return 5;
  } else if (try_count <= 15 && try_count > 10) {
    return 10;
  } else if (try_count <= 10 && try_count > 5) {
    return 15;
  } else {
    return 20;
  }
}
