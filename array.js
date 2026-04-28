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

// using method in array
// add element to last 
arr.push(44);
console.log(arr);
// add element to first
arr.unshift(77);
console.log(arr);

// find the index of element
console.log(arr.indexOf(77))
console.log(arr.indexOf(44));

// find if array exist or not
console.log(arr.includes(77));
console.log(arr.includes(7));


const fruits = ["apple", "guava", "cherry", "coconut", "grape", "strawberry", "pear"];
console.log("The index of apple: ", fruits.indexOf("apple"));
console.log("The index of pear: ", fruits.indexOf("pear"));
console.log("Is cherry exist? ", fruits.includes("cherry"));


// map : loop each element in array
const num = [1, 2, 3, 4, 5];
// loop each element and multiple it with 2
const doubleNum = num.map(num => num * 2);
console.log(doubleNum);



