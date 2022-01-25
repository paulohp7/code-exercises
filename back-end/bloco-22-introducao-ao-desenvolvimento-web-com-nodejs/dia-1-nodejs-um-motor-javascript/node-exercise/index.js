const readline = require('readline-sync');
const CalcIMC = require('./scripts/imc')
const fileSystem = require('fs');
const name = readline.question('What is your name? ');
const height = readline.questionFloat('What is your height? ');
const weight = readline.questionFloat('What is your weight? ', { hideEchoBack: true });
console.log(`Hi ${name}`);
console.log(CalcIMC.imc(weight, height));