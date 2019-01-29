let secretNumber= Math.round(((Math.random () * 99999)+9999));

console.log("The Secret Number is " + secretNumber);
let guess=prompt("Guess a 5 digit number");

if (guess<10000 || guess>99999) {
    alert("Guess must be 5 digits and a real number") }
    else { 
        alert("Your first guess is " + guess);
}
console.log(Array.from(guess.toString()));

var partsOfStr = str.split(',');



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
