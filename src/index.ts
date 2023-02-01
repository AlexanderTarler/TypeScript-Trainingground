// a simple function, showing how types can works and should be placed
const greeter = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greeter("Alex"));

//
//
//

// arrays of numbers, where the objects gets the type implicitly from its assigned value
const firstArrayOfNumbers = [1, 2, 3, 4, 5];
const secondArrayOfNumbers = [6, 7, 8, 9, 10];

// same goes for this array of letters
const arrayOfLetters = ["a", "b", "c", "d", "e"];

// the array.map method calls a function on every element in the array
const mappedArray = firstArrayOfNumbers.map((element) => element * 2);
console.log(mappedArray);

// the array.concat method merges two arrays together, returning a new array
const concatenatedArray = firstArrayOfNumbers.concat(secondArrayOfNumbers);
console.log(concatenatedArray);
