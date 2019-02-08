"use strict";
// 1.

function1();
function function1() {
let one = "Function 1";
console.log(one);
function2();
}

// 2. 
function function2() {
let two = "Function 2";
console.log(two);
function3(two);
}


// 3.
function function3(f3) {
let three = "Function 3"
    console.log(f3 + " + 1");
    function4(three);
}

//4.
function function4(f4) {
if (f4.length < 5) {
console.log(true);
} else {console.log(false)}
let four = "Function 4"
function5(four);
}

function function5(f5) {
let eachTime = 0; 
while (f5.length !== eachTime) {
    console.log("Happy Day");
    eachTime = eachTime + 1;
}
}