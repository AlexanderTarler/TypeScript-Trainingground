

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
  
  // secondPromise returns a response after 0.1 second
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

  // async/await

  const firstAsyncFunction = async (firstString: string, secondString: string) => {
    
  }
  
  lengthOfString('Hello World!');