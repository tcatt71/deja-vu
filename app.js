'use strict'

let rand = Math.floor(Math.random() * 100) + 1;
let userInput = prompt('Pick a number between 1 and 100');
let isWinner = false;

while (!isWinner) {
  if (userInput < rand) {
    alert('too low');
    userInput = prompt('guess again');
  } else if (userInput > rand) {
    alert('too high');
    userInput = prompt('guess again');
  } else {
    alert('Congradulations!!!');
    isWinner = true;
  }
}