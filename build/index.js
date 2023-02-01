"use strict";
// a simple function, showing how types can works and should be placed
var greeter = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greeter("Alex"));
//
//
//
// arrays of numbers, where the objects gets the type implicitly from its assigned value
var firstArrayOfNumbers = [1, 2, 3, 4, 5];
var secondArrayOfNumbers = [6, 7, 8, 9, 10];
// same goes for this array of letters
var arrayOfLetters = ["a", "b", "c", "d", "e"];
// the array.map method calls a function on every element in the array
var mappedArray = firstArrayOfNumbers.map(function (element) { return element * 2; });
console.log(mappedArray);
// the array.concat method merges two arrays together, returning a new array
var concatenatedArray = firstArrayOfNumbers.concat(secondArrayOfNumbers);
console.log(concatenatedArray);
