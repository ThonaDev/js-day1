"use strict"

const nums = [1, 4, 5, 6, 6, 9, 10];
console.log("Numbers : ", nums);

let emptyArray = [];
console.log("Empty array: ", emptyArray);


// declare array with constructor
const arr = new Array();
// it take 8 as element ( 8 empty elements )
// not one element value = 8 
const arr1 = new Array(8);
const arr2 = new Array(1, 2, 3);

console.log("arr: ", arr);
console.log("First arr1: ", arr1);
console.log("Second arr: ", arr2);
console.log("Access the first elements in arr2:");
console.log(console.log(arr2[0]));