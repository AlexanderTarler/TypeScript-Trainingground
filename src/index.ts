import { objectWithNames } from './databank';
import * as fs from 'fs';
import { resolve } from 'path';
import { rejects } from 'assert';
import { Console } from 'console';

// a simple function, showing how types can works and should be placed
const greeter = (name: string): string => {
  return `Hello, ${name}!`;
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

// callback functions are functions that you send as an argument to another function
const firstFunction = (
  firstWord: string,
  secondWord: string,
  callback: { (sentence: string): void; (arg0: string): void }
) => {
  const newSentence: string = firstWord + ' ' + secondWord + '!';
  callback(newSentence);
};

const callbackFunction = (sentence: string) => {
  console.log(sentence);
};

firstFunction('Hello', 'World', callbackFunction);

// promises are a way to handle asynchronous code so that we can organize it better than callbacks
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('thing to resolve');
  }, 100);
});

console.log(firstPromise); // will leave 'promise {pending}' as a result

const secondPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 100);
});

secondPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});

const lengthOfString = (string: string) => {
  return new Promise<number>((resolve, reject) => {
    if (string.length > 0) {
      resolve(string.length);
    } else {
      reject(new Error('String needs at least one character'));
    }
  }).then((value) => console.log(value));
};

lengthOfString('Hello World!');
