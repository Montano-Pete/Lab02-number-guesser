// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const guessButton = document.getElementById('guessButton');
const userInput = document.getElementById('userInput');
const results = document.getElementById('win-loss');
const remainingTries = document.getElementById('remaining-tries');
const correctNumber = Math.ceil(Math.random() * 20);

// initialize state

// set event listeners to update state and DOM


guessButton.addEventListener('click', () => {

const userGuess = Number(userInput.value);

    if (compareNumbers(userGuess, correctNumber) === 0){
        results.textContent = 'Congrats! You guessed the right number!';
}
    if (compareNumbers(userGuess, correctNumber) === 1){
        results.textContent = 'Your guess is too high! Try a lower number';
}
    if (compareNumbers(userGuess, correctNumber) === -1){
        results.textContent = 'Your guess is too low! Try a higher number';
}


});