"use strict"

let secretNumber;
let guess = "0";
let guesses = 0;
let turn = "first";
let guessChar1, guessChar2, guessChar3, guessChar4, guessChar5;
let times = 1;
let characters = 0;
let roundCount = 0;
let bulls = 0;
let cows = 0;
let secretChar = 0;
let guessCount = 0;
let guessCharX = 0;

// 1. secretNumberGenerator();
// 2. askIfPlayerWantsToPlay();
// 3. validateUserInputIsNumber();
// 4. getUserInputNumber();
// 5. calculateCowsBullsCompare();
// 5a. function assignGuessCharX();
// 5b. function compareGuessCharXToSecretChar();
document.body.addEventListener("click", function(event)
// 1. Generate a Secret Number and assign the characters to variables
secretNumberGenerator();

function secretNumberGenerator() {
    secretNumber = Math.round((Math.random() * 99999) + 9999);
    console.log("The Secret Number is " + secretNumber);
    secretNumber = secretNumber.toString();
    askIfPlayerWantsToPlay();
}
// 2. Ask player to enter 5 characters one guess at a time and assign to variables. Returns bulls and cows count to the player
function askIfPlayerWantsToPlay() {
     
    while (roundCount < 10) { //Try Again
        if (roundCount == 10) {
            alert("Sorry your turns are up");
        } else {
            let tryAgain = prompt('You can try up to 10 times. Would you like to try to guess a number.  Type "yes" or "no"')
            if (tryAgain == "no") {
                alert("Quitting so soon?");
                break end;
            } else if (tryAgain != "yes") {
                alert('Please enter "yes" or "no"');
            } else {
                alert("Good Luck!");
            }
        }
        roundCount = roundCount++;
        validateUserInputIsNumber();
    }
}

// 3. Validate Guess
function validateUserInputIsNumber() {
    guess = prompt("Guess the " + turn + " digit of your 5 digit number.");
    if (guess == null) { console.long("guess  " + guess);
        return;
    } else if (guess > 9) {
        console.log("Guess must be a 1 digit whole number between 0 and 9, your number was " + guess);
    } else {
        getUserInputNumber();
    }
}
// 4. Get User Input
function getUserInputNumber() {
    if (guesses == 0) {
        turn = "second";
        guessChar1 = guess; 
        alert("guessChar1 = " + guessChar1)
        console.log("Your first digit is " + guessChar1);
        guesses = guesses + 1;
    } else if (guesses == 1) {
        turn = "third";
        guessChar2 = guess;
        alert("guessChar2 = " + guessChar2)
        console.log("Your second digit is " + guessChar2);
        guesses = guesses + 1;
    } else if (guesses == 2) {
        turn = "fourth";
        guessChar3 = guess;
        alert("guessChar3 = " + guessChar3)
        console.log("Your third digit is " + guessChar3);
        guesses = guesses + 1;
    } else if (guesses == 3) {
        turn = "fifth";
        guessChar4 = guess;
        alert("guessChar4 = " + guessChar4)
        console.log("Your forth digit is " + guessChar4);
        guesses = guesses + 1;
    } else {
        guessChar5 = guess;
        alert("guessChar5 = " + guessChar5)
        console.log("Your fifth digit is " + guessChar5);
        guesses = guesses + 1;
        console.log("incremented to " + guesses);
        alert("You guessed " + guessChar1 + guessChar2 + guessChar3 + guessChar4 + guessChar5);
        calculateCowsBullsCompare();
    }
    validateUserInputIsNumber();
    
}


// 5a. Assign Character to GuessCharX
function assignGuessCharX() {
    while (guessCount <= 4) { //Assign one character to guessCharX
        if (guessCount === 0) {
            guessCharX = parseInt(guessChar1);
        } else if (guessCount === 1) {
            guessCharX = parseInt(guessChar2);
        } else if (guessCount === 2) {
            guessCharX = parseInt(guessChar3);
        } else if (guessCount === 3) {
            guessCharX = parseInt(guessChar4);
        } else if (guessCount === 4) {
            guessCharX = parseInt(guessChar5);
        } else {}
        console.log("My guess X is" + guessCharX);
        guessCount = guessCount + 1;
        console.log(guessCount);
    }
}

// 5b. Compare guesses (guessCount [1..5]) to secretNumber (secretChar [1..5])
function compareGuessCharXToSecretChar() {
    if (secretChar != guessCount && (guessCharX == secretNumber.charAt(secretChar))) {
        console.log("This is not the same character of both the guess and the secret " + secretChar + " " + guessCount + " but there is a match " + guessCharX + " " + secretNumber.charAt(secretChar))
        cows = cows + 1;
    } else if (guessCharX == secretNumber.charAt(secretChar)) {
        bulls = bulls + 1;
    } else {}
    secretChar = secretChar + 1;
    console.log("The secret character count is " + secretChar + " and the guessed character count it " + guessCount);
}

// 5. Calculate the quantity of cows and bulls.
function calculateCowsBullsCompare() {
    while (guessCount <= 4) { //Assign one character to guessCharX
        assignGuessCharX();
        console.log(assignGuessCharX);
        while (secretChar <= 4) { //Test current guessCharX against each of the secret number charactersfunction assignGuessCharX();
            compareGuessCharXToSecretChar();
            // console.log(compareGuessCharXToSecretChar);
        }
    }
    askIfPlayerWantsToPlay();
}