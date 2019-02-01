"use strict"

let secretNumber = Math.round((Math.random() * 10000) + 9999);
let guess = "0";
let guesses = 0;
let turn = "first";
let digit1, digit2, digit3, digit4, digit5;
let times = 1;
let secret1, secret2, secret3, secret4, secret5;
let characters = 0;
let roundcount = 0;

// Generate a Secret Number and assign the characters to variables

secretNumber = Math.round((Math.random() * 10000) + 9999);
console.log("The Secret Number is " + secretNumber);
secretNumber = secretNumber.toString();

secret1 = secretNumber.charAt(0);
secret2 = secretNumber.charAt(1);
secret3 = secretNumber.charAt(2);
secret4 = secretNumber.charAt(3);
secret5 = secretNumber.charAt(4);

console.log(secret1, secret2, secret3, secret4, secret5);



// Ask player to enter 5 characters one digit at a time and assign to variables. Returns bulls and cows count to the player

end:
    while (roundcount < 10) {
        let bulls = 0;
        let cows = 0;
        let charCount = 0;
        let digitCount = 0;
        let digitx = 0;
        roundcount = roundcount++;
        while (guesses < 5) {
            let guess = prompt("Guess the " + turn + " digit of your 5 digit number.");
            if (guess == null) {
                break;
            } else if (parseInt(guess) > 9) {
                console.log("line 14");
                console.log("Guess must be 1 digit whole number between 0 and 9, your number was" + guess);
                break end;
            } else if (guesses == 0) {
                console.log("line 17");
                turn = "second";
                console.log("line 18");
                digit1 = guess;
                console.log("line 19");
                console.log("line 20 Your first digit is " + digit1);
                guesses = guesses + 1;
                console.log("line 21 incremented to " + guesses);
            } else if (guesses == 1) {
                console.log("line 22");
                turn = "third";
                console.log("line 28");
                digit2 = guess;
                console.log("line 24");
                console.log("Your second digit is " + digit2);
                console.log("line 25");
                guesses = guesses + 1;
                console.log("line 26 incremented to " + guesses);
            } else if (guesses == 2) {
                console.log("line 27");
                turn = "forth";
                console.log("line 28");
                digit3 = guess;
                console.log("line 29");
                console.log("Your third digit is " + digit3);
                console.log("line 30");
                guesses = guesses + 1;
                console.log("line 31 incremented to " + guesses);
            } else if (guesses == 3) {
                console.log("line 32");
                turn = "fifth";
                console.log("line 32");
                digit4 = guess;
                console.log("line 33");
                console.log("line 34 Your forth digit is " + digit4);
                guesses = guesses + 1;
                console.log("line 35 incremented to " + guesses);
            } else {
                console.log("line 36 else statement");
                digit5 = guess;
                console.log("line 37 let digit5 statement");
                console.log("Your fifth digit is " + digit5);
                console.log("line 38");
                guesses = guesses + 1;
                console.log("incremented to " + guesses);
                console.log("line 39");
                alert("You guessed " + digit1 + digit2 + digit3 + digit4 + digit5);
            }
        }

        // Compare guesses (digit1..5) to secret number (Secret1..5)
        while (digitCount <= 4) { 
            
            console.log("My Digit X is" + digitx);
            if (digitCount === 0) {
                digitx = digit1;
            } else if (digitCount === 1) {
                digitx = digit2;
            } else if (digitCount === 2) {
                digitx = digit3;
            } else if (digitCount === 3) {
                digitx = digit4;
            } else if (digitCount === 4) { alert(110)
                digitx = digit5;
            } else {}
            digitCount = digitCount + 1; 
            alert(114);

            while (charCount <= 4) { 
                alert(115)
                if (digitx == secretNumber.charAt(charCount) && (charCount != (digitCount + 1))) { alert(116)
                    cows = cows + 1;
                } else if (digitx == secretNumber.charAt(charCount) && (charCount == (digitCount + 1))) {
                    bulls = bulls + 1;
                } else {}
                charCount = charCount + 1;
            }
        }
        console.log(bulls + " Bulls " + cows + " cows");
    }