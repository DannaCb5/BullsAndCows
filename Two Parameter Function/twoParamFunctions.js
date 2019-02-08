"use strict";
// 1.
let a = "Happy Day, there should be 38 strings ";
console.log("You made it to here")
ex1(a, a.length);

function ex1(p1, p2) {
    let repeat;
    for (repeat = 0; repeat < p2; repeat++) {
        console.log(p1);
}
console.log("End of First Problem");
console.log("");
}

// 2.
let b = "This one should have 3 strings"
let c = [b, 3]
ex2(c, 3)

function ex2(p3, p4) {
    let d;
    for (d=0; d < p4; d++) {
    console.log (p3, p4);
}
console.log("End of second problem");
console.log("");
}

// 3.
let fruit = "Apples"
let veggies = " Broccoli and Cauliflour"
let beef = " Steak"
let e = [fruit, veggies, beef]
ex3(e)

function ex3(p5) {
    console.log("Menu: " + p5);
    console.log("End of third problem");
    console.log("");
}