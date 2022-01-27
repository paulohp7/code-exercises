const readline = require('readline-sync');

function myNumbers(numbers) {
    const promise = new Promise((resolve, reject) => {
        if (numbers.some((number) => typeof number !== 'number')) reject(new Error('Informe apenas números'))
        const myOperation = (numbers[0] + numbers[1]) * numbers[2];
        if (myOperation < 50) reject(new Error('Valor muito baixo')) 
        resolve(myOperation)
    });
    return promise;
  }

const paramA = readline.question('Write a number: ');
const paramB = readline.question('Write another number: ');
const paramC = readline.question('Write another number: ');
const numbers = [paramA, paramB, paramC];

myNumbers(numbers);
  
  /*dividirNumeros(2, 1)
    .then(result => console.log(`sucesso: ${result}`))
    .catch(err => console.log(`erro: ${err.message}`));*/