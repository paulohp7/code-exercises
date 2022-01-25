const readline = require('readline-sync');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const drawNumber = getRandomIntInclusive(0, 10);
const chosenNumber = readline.question('Which number will you choose? ');
if (drawNumber == chosenNumber) console.log('Congratulations! Correct number!');
else console.log(`Sorry, maybe next time! The draw number was ${drawNumber}`);