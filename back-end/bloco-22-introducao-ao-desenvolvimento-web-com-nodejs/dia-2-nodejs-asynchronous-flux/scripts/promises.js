const readline = require('readline-sync');

const paramA = readline.questionFloat('Write a number: ');
const paramB = readline.questionFloat('Write another number: ');
const paramC = readline.questionFloat('Write another number: ');
const numbers = [paramA, paramB, paramC];

function myNumbers(numbers) {
    const promise = new Promise((resolve, reject) => {
        if (numbers.find((number) => typeof number !== Number)) reject(new Error('Informe apenas números'))
        const myOperation = (numbers[0] + numbers[1]) * numbers[2];
        if (myOperation < 50) reject(new Error('Valor muito baixo')) 
        resolve(myOperation)
    });
    return promise;
  }
  
  /*dividirNumeros(2, 1)
    .then(result => console.log(`sucesso: ${result}`))
    .catch(err => console.log(`erro: ${err.message}`));*/