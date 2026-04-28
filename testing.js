"use strict"
// global scope

if(true){
    var str1 = "Hello Bro!";
    console.log("Str 1 inside scope: " + str1);
}
console.log("Str 1 outside scope: " + str1);


if(true){
    let num = 168;
    console.log("Number inside scope: " + num);
}
// will cause error, cuz let is block scope
// console.log("Number outside scope: " + object)


// will cause error
// Uncaught ReferenceError: num is not defined (hoisting)
// console.log("Number: " + num);
// let num = 99;

let fruit = "Apple";
fruit = "Coconut";
console.log("Fruit: " + fruit);

// will cause error cause pi type is constance
// const pi = 3.14;
// pi = 3.15;
// console.log("The value of pi: " + pi);

// Function
function greeting(){
    console.log("Good Afternoon bro sis!");
}
// call function
greeting();

function sum(num1 = 5, num2 = 10){
    console.log("Num1 + Num2: ", num1 + num2);
}

// call function
sum();
sum(5, 5);


// arrow function
const multiply = () => {
    console.log("A * B: ", 3 * 4);
}

multiply();

// with para
// if we have only one para and one statement (no need () and {})
const greeting2 = name =>
    console.log(`Hello "${name}!"`);


greeting2("Dudu");