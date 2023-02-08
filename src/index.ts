import { objectWithNames } from './databank';
import * as fs from 'fs';
import { resolve } from 'path';
import { Console } from 'console';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


// a simple function, showing how types can works and should be placed
const greeter = (name: string): string => {
  return `Hello, ${name}!`;
};

export const getName = (): string => {
  const name = document.querySelector('submit');
  const nameToGreet = document.querySelector('greeter');
  nameToGreet!.innerHTML = (name) ? `Hello, ${name}!` : 'Name is missing!';
  return 'Name greeted';
}

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


