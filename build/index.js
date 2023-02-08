"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// a simple function, showing how types can works and should be placed
const greeter = (name) => {
    return `Hello, ${name}!`;
};
const getName = () => {
    const name = document.querySelector('button').value;
    const nameToGreet = document.querySelector('submit');
    nameToGreet.innerHTML = (name) ? `Hello, ${name}!` : 'Name is missing!';
    return 'Name greeted';
};
console.log(greeter('Alex'));
//
//
//
// arrays of numbers, where the objects gets the type implicitly from its assigned value
const firstArrayOfNumbers = [1, 2, 3, 4, 5];
const secondArrayOfNumbers = [6, 7, 8, 9, 10];
// same goes for this array of letters
const arrayOfLetters = ['a', 'b', 'c', 'd', 'e'];
// the array.map method calls a function on every element in the array
const mappedArray = firstArrayOfNumbers.map((element) => element * 2);
console.log(mappedArray);
// the array.concat method merges two arrays together, returning a new array
const concatenatedArray = firstArrayOfNumbers.concat(secondArrayOfNumbers);
console.log(concatenatedArray);
