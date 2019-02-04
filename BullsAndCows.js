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

// Generate a Secret Number and assign the characters to variables

function getUserInputNumber()
function validateUserInputIsNumber()
function secretNumberGenerator() {
    Math.round((Math.random() * 99999) + 9999);
    console.log("The Secret Number is " + secretNumber);
    secretNumber = secretNumber.toString();
    return secretNumber;
}
function calculateCowsBullsCompare()


// Ask player to enter 5 characters one guess at a time and assign to variables. Returns bulls and cows count to the player

end:
    while (roundCount < 10) { //Try Again
        let secretChar = 0;
        let guessCount = 0;
        let guessCharX = 0;
        
        if (roundCount = 10) {
            "Sorry your turns are up"
        } else {
        let tryAgain = prompt('You can try up to 10 times. Would you like to try to guess a number.  Type "yes" or "no"')
            if (tryAgain == "no") {
                alert("Quitting so soon?");
                break end;
            } else if (tryAgain != "yes") { alert('Please enter "yes" or "no"');
            } else {
                alert("Good Luck");
            }
        }
        roundCount = roundCount++;
        while (guesses < 5) { // Collect Guess
            let guess = prompt("Guess the " + turn + " guess of your 5 guess number.");
            if (guess == null) {
                break;
            } else if (parseInt(guess) > 9) {
                console.log("Guess must be 1 guess whole number between 0 and 9, your number was" + guess);
                break end;
            } else if (guesses == 0) {
                turn = "second";
                guessChar1 = guess;
                console.log("Your first guess is " + guessChar1);
                guesses = guesses + 1;
            } else if (guesses == 1) {
                turn = "third";
                guessChar2 = guess;
                console.log("Your second guess is " + guessChar2);
                guesses = guesses + 1;
            } else if (guesses == 2) {
                turn = "forth";
                guessChar3 = guess;
                console.log("Your third guess is " + guessChar3);
                guesses = guesses + 1;
            } else if (guesses == 3) {
                turn = "fifth";
                guessChar4 = guess;
                console.log("Your forth guess is " + guessChar4);
                guesses = guesses + 1;
            } else {
                guessChar5 = guess;
                console.log("Your fifth guess is " + guessChar5);
                guesses = guesses + 1;
                console.log("incremented to " + guesses);
                alert("You guessed " + guessChar1 + guessChar2 + guessChar3 + guessChar4 + guessChar5);
            }
        }
        // Compare guesses (guessCount [1..5]) to secretNumber (secretChar [1..5])

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
            guessCount = guessCount + 1; console.log(guessCount);

            while (secretChar <= 4) { //Test current guessCharX against each of the secret number characters
                if (secretChar != guessCount && (guessCharX == secretNumber.charAt(secretChar))) 
                { console.log("This is not the same character of both the guess and the secret " + secretChar + " " + guessCount + " but there is a match " + guessCharX + " " + secretNumber.charAt(secretChar)) 
                    cows = cows + 1;
                } else if (guessCharX == secretNumber.charAt(secretChar)) { 
                    bulls = bulls + 1;
                } else {  }
                secretChar = secretChar + 1;
                console.log("The secret character count is " + secretChar + " and the guessed character count it " + guessCount);
            }
        }
        console.log(bulls + " Bulls " + cows + " cows");

    }