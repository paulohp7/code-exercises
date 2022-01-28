const myFunction = require('./scripts/promises');

// const numA = Math.floor(Math.random() * 100 + 1);
// const numB = Math.floor(Math.random() * 100 + 1);
// const numC = Math.floor(Math.random() * 100 + 1);
// const myNumbers = [numA, numB, numC];

async function callMyFunction() {

    const numA = 0;
    const numB = 10;
    const numC = 7;
    const myNumbers = [numA, numB, numC];

    try {
        const result = await myFunction(myNumbers);
        console.log(`Your result is: ${result}`);
    }
    catch(err) {
        console.log(`Error: ${err.message}`);
    }

}

callMyFunction();
