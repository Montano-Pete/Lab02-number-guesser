//This function needs to take two paramameters, users guess (input) and random number (generated), and compare them both resulting in three possible return values... 0, -1, 1

export function compareNumbers(userGuess, correctNumber) {
    if (userGuess === correctNumber) {
        return 0;
    } else if (userGuess > correctNumber) {
        return 1;
    }
    return -1;
}