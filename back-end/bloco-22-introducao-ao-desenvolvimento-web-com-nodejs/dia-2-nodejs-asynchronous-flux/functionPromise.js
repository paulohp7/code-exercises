const readline = require('readline-sync');

function isMultiple(number) {
    const promise = new Promise((resolve, reject) => {
        if (number % 3 == 0 && number % 5 == 0) resolve('FizzBuzz');
        else if (number % 3 == 0) resolve('Fizz');
        else if (number % 5 == 0) resolve('Buzz');
        else reject(number);
    });
    return promise;
}

const myNumber = readline.questionInt('Choose a integer number greater than 0: ');
isMultiple(myNumber)
    .then(data => console.log(data))
    .catch(rej => console.log(rej));