'use strict';

const player0_Dis = document.querySelector('.player--0');
const player1_Dis = document.querySelector('.player--1');
const score0_Dis = document.querySelector('#score--0');
const score1_Dis = document.getElementById('score--1');
const dice_Dis = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0_Dis = document.querySelector('#current--0');
const current1_Dis = document.querySelector('#current--1');

// game init
score0_Dis.textContent = 0;
score1_Dis.textContent = 0;

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
btnRoll.disabled = false;
btnHold.disabled = false;

//function to roll the dice

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice_Dis.classList.remove('hidden');
  dice_Dis.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    //add number to score
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch player
    switchTurn();
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  winnerCheck();
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  switchTurn();
});

btnNew.addEventListener('click', startGame);

function switchTurn() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0_Dis.classList.toggle('player--active');
  player1_Dis.classList.toggle('player--active');
}
function winnerCheck() {
  if (score[activePlayer] >= 50) {
    const winnerSection = document.querySelector('.player--active');
    const winner = document.getElementById(`name--${activePlayer}`);
    endGame();
    winner.textContent = 'Winner!';
    winnerSection.classList.add('player--winner');
  }
}

function startGame() {
  score0_Dis.textContent = 0;
  score1_Dis.textContent = 0;
  current0_Dis.textContent = 0;
  current1_Dis.textContent = 0;
  player1_Dis.classList.remove('player--winner');
  player0_Dis.classList.remove('player--winner');
  player0_Dis.classList.add('player--active');
  player1_Dis.classList.remove('player--active');
  document.getElementById(`name--0`).textContent = 'Player 1';
  document.getElementById(`name--1`).textContent = 'Player 2';

  currentScore = 0;
  activePlayer = 0;
  score[0] = 0;
  score[1] = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  dice_Dis.classList.add('hidden');
}

function endGame() {
  btnRoll.disabled = true;
  btnHold.disabled = true;
  dice_Dis.classList.add('hidden');
}
