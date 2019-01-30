"use strict"

let secretNumber= Math.round((Math.random ()*10000) + 9999);

console.log("The Secret Number is " + secretNumber);
let guess=prompt("Guess the first digit of your 5 digit number");

console.log(guess); 

let guesses=0
let turn = "second"
while (guesses <= 4) { 
guess=prompt("Guess the " + turn + " digit of your 5 digit number");
    if (parseInt(guess) > 9) { console.log("line 14");
        console.log("Guess must be 1 digit whole number between 0 and 9, your number was" + guess);
        break;
    } else if (guesses == 0) { console.log("line 17");
        let turn = "third"; console.log("line 18")
        let digit1 = guess; console.log("line 19");
        console.log("Your first digit is " + digit1);
        guesses = guesses + 1; console.log("line 21 incremented to " + guesses);
    } else if (guesses == 1) { console.log("line 22");
        let turn = "forth"; console.log("line 23")
        let digit2 = guess; console.log("line 24");
        console.log("Your second digit is " + digit2); console.log("line 25")
        guesses = guesses + 1; console.log("line 26 incremented to " + guesses);
    } else if (guesses == 2) { console.log("line 27");
        let turn = "fifth"; console.log("line 28")
        let digit3 = guess; console.log("line 29");
        console.log("Your third digit is " + digit3); console.log("line 30")
        guesses = guesses + 1; console.log("line 31 incremented to " + guesses);
    } else if (guesses == 3) { console.log("line 32");
        let digit4 = guess; console.log("line 33");
        console.log("line 34 Your forth digit is " + digit4);
        guesses = guesses + 1; console.log("line 35 incremented to " + guesses);
    } else if (guesses == 4) { console.log("line 36 else statement");
        let digit5 = guess; console.log("line 37 let digit5 statement");
        console.log("Your fifth digit is " + digit5); console.log("line 38")
        guesses = guesses + 1; console.log("incremented to " + guesses); console.log("line 39")
    } else { 
        console.log(digit1, digit2, digit3, digit4, digit5,  + "line 40");
    }


}

console.log(Array.from(secretNumber.toString()));

// var partsOfStr = str.split(',');



// let randomNumber = Math.floor(((Math.random () * 10)));

// let digitOne = randomNumber;

// randomNumber = Math.floor(((Math.random () * 10)));
// let digitTwo = randomNumber;
// randomNumber = Math.floor(((Math.random () * 10)));
// let digitThree = randomNumber;

// console.log(digitOne, digitTwo, digitThree);

// console.log(secretNumber);



// test=document.getElementById("secretNumber");
// test.innerHTML=guess;
