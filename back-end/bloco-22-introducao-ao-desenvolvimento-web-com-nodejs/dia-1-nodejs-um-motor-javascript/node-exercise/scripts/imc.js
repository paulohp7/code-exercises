const readline = require('readline-sync');

const imc = (weight, height) => weight / (height ** 2);
const name = readline.question('What is your name? ');
const height = readline.questionFloat('What is your height? ');
const weight = readline.questionFloat('What is your weight? ', { hideEchoBack: true });
console.log(`Hi ${name}`);
const BMI = +imc(weight, height).toFixed(1);
console.log(`Your BMI is: ${BMI}`);
if (BMI < 18.5) console.log('Abaixo do peso (magreza)');
else if (BMI >= 18.5 && BMI < 25) console.log('Peso normal');
else if (BMI >= 25 && BMI < 30) console.log('Acima do peso (sobrepeso)');
else if (BMI >= 30 && BMI < 35) console.log('Obesidade grau I');
else if (BMI >= 35 && BMI < 40) console.log('Obesidade grau II');
else console.log('Obesidade graus III e IV');

module.exports = imc;