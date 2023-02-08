"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const firstFunction = (firstWord, secondWord, callback) => {
    const newSentence = firstWord + ' ' + secondWord + '!';
    callback(newSentence);
};
const callbackFunction = (sentence) => {
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
// secondPromise returns a response after 0.1 second
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved!');
    }, 100);
});
secondPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage}`);
});
const lengthOfString = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 0) {
            resolve(string.length);
        }
        else {
            reject(new Error('String needs at least one character'));
        }
    }).then((value) => console.log(value));
};
// async/await
const firstAsyncFunction = (firstString, secondString) => __awaiter(void 0, void 0, void 0, function* () {
});
lengthOfString('Hello World!');
