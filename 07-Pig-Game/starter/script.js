'use strict';

//Total score after been held
const score0 = document.getElementById('score--0');
//getElementById also works the same way, it does not require an hash(#), and little bit faster than selector
const score1 = document.getElementById('score--1');
//Temp score been produced by the dice
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
//The background section of each player(set up to change the color of the background color if the player's turn is up)
const currentPlayer0 = document.querySelector('.player--0');
const currentPlayer1 = document.querySelector('.player--1');
//img of the dice
const diceImg = document.querySelector('.dice');
//declare a random generated dice score
let diceScore = 0;
//Check which player's turn is up
let currentFPlayer = true;
let playing = true;

//A function is used to switch player's turn
const switchPlayer = () => {
  //check which player's turn is currently on
  if (currentFPlayer) {
    //add up score into total score pool
    score0.textContent =
      Number(score0.textContent) + Number(currentScore0.textContent);
    //reset temp score
    currentScore0.textContent = 0;
    //switch background color to the current player
    currentPlayer1.classList.add('player--active');
    currentPlayer0.classList.remove('player--active');
    if (Number(score0.textContent) >= 100) {
      playing = false;
      currentPlayer0.classList.add('player--winner');
    }
  } else {
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = 0;
    currentPlayer0.classList.add('player--active');
    currentPlayer1.classList.remove('player--active');
    if (Number(score1.textContent) >= 100) {
      playing = false;
      currentPlayer1.classList.add('player--winner');
    }
  }
  //switch player identifier
  currentFPlayer = !currentFPlayer;
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    //randomly roll a number from 1 to 6 as soon as the user click to roll the dice
    diceScore = Math.trunc(Math.random() * 6 + 1);
    //Unhide the dice image
    diceImg.classList.remove('hidden');

    //check which players turn is currently on
    if (currentFPlayer) {
      //adds up the temp score and the dice generated score
      currentScore0.textContent = diceScore + Number(currentScore0.textContent);
    } else {
      currentScore1.textContent = diceScore + Number(currentScore1.textContent);
    }

    //if the dice rolls on a 'one'
    if (diceScore === 1) {
      //clear the temp score according to which player is currently on
      if (currentFPlayer === true) currentScore0.textContent = 0;
      else currentScore1.textContent = 0;
      //automatically switch player and counts up the score
      //p.s: used the previous declared function 'switchPlayer()'
      switchPlayer();
    }
    //display dice 1 image
    diceImg.src = `dice-${diceScore}.png`;
  }
});

//When ever the player choose to hold their number and click the button, counts up the score and move on to the next player
document.querySelector('.btn--hold').addEventListener('click', switchPlayer);

//reset the new game when the player press the 'new game button'
document.querySelector('.btn--new').addEventListener('click', function () {
  //reset the current player role
  currentFPlayer = true;
  playing = true;
  //reset the current player background color
  currentPlayer0.classList.add('player--active');
  currentPlayer1.classList.remove('player--active');
  //reset the player temp score
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  //reset the players total score
  score0.textContent = 0;
  score1.textContent = 0;

  if (currentPlayer0.classList.contains('player--winner'))
    currentPlayer0.classList.remove('player--winner');
  else if (currentPlayer1.classList.contains('player--winner'))
    currentPlayer1.classList.remove('player--winner');
});

// I DID IT !!!!!!!!!!!😊
