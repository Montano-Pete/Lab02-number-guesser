import { compareNumbers, numberOfTries } from './utils.js';

const guessButton = document.getElementById('guessButton');
const userInput = document.getElementById('userInput');
const results = document.getElementById('win-loss');
const remainingTries = document.getElementById('remaining-tries');
const resetButton = document.getElementById('resetButton');
let correctNumber = Math.ceil(Math.random() * 20);

let threeTries = 3;

guessButton.addEventListener('click', () => {
    
    const userGuess = Number(userInput.value);
    results.style.display = 'block';
    remainingTries.style.display = 'block';
    threeTries--;

    if (compareNumbers(userGuess, correctNumber) === 0){
        results.textContent = 'Congrats! You guessed the right number!';
        remainingTries.style.display = 'none';
        guessButton.disabled = true;
    }

    if (compareNumbers(userGuess, correctNumber) === 1){
        results.textContent = 'Your guess is too high! Try a lower number';
    }

    if (compareNumbers(userGuess, correctNumber) === -1){
        results.textContent = 'Your guess is too low! Try a higher number';
    }

    remainingTries.textContent = numberOfTries(threeTries);

    if (threeTries === 0){
        results.style.display = 'none';
        guessButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {

    threeTries = 3;
    correctNumber = Math.ceil(Math.random() * 20);
    results.style.display = 'none'; 
    remainingTries.style.display = 'none';
    guessButton.disabled = false;
    userInput.value = 1;
});