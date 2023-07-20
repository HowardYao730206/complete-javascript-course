'use strict';

//use the syntax to access the element from the HTML file
//document.querySelector('.message').textContent = '🥳Correct number!!!';
//let responese = document.querySelector('.score').value;
let answer = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector('.score').textContent;
let highScore = 0;
let completeGame = false;
let message = document.querySelector('.message').textContent;
//react to a button with DOM
//The method addEventListener( 'action' , function ) checks the button interaction
document.querySelector('.check').addEventListener('click', function () {
  if (completeGame === false) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (guess > answer) {
      message = 'too High !!!';
      score--;
    } else if (guess < answer) {
      message = 'too Low !!!';
      score--;
    } else {
      message = 'Correct !!!';
      document.querySelector('.number').textContent = answer;
      document.querySelector('body').style.backgroundColor = '#39c5bb';
      document.querySelector('.number').style.width = '30rem';
      completeGame = true;
    }
    if (!guess) {
      message = 'Please Enter a valid number!😊';
    }

    document.querySelector('.score').textContent = score;

    if (score <= 0) {
      message = 'you lost !!!';
      completeGame = true;
    }
  } else {
    message = 'You have completed the game, refresh to gain higher score';
  }
  document.querySelector('.message').textContent = message;
});

//Simply refresh the whoel page to reset the game
/* document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
 */

document.querySelector('.again').addEventListener('click', function () {
  if (score > highScore && completeGame === true) {
    highScore = score;
  }
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  answer = Math.trunc(Math.random() * 20 + 1);
  completeGame = false;
});
