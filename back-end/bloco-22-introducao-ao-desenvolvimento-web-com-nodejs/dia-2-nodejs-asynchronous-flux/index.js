const myFunction = require('./scripts/promises');

// const numA = Math.floor(Math.random() * 100 + 1);
// const numB = Math.floor(Math.random() * 100 + 1);
// const numC = Math.floor(Math.random() * 100 + 1);
// const myNumbers = [numA, numB, numC];

const numA = 0;
const numB = 'e';
const numC = 7;
const myNumbers = [numA, numB, numC];

myFunction(myNumbers)
    .then(result => console.log(`Your result is: ${result}`))
    .catch(err => console.log(`Error: ${err.message}`));
