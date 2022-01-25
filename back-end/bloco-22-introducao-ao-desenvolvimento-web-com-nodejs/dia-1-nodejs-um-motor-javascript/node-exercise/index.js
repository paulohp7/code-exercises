const readline = require('readline-sync');
const myIBM = require('./scripts/imc');
const myPrizeDraw = require('./scripts/prize_draw');
const myAvarageSpeed = require('./scripts/speed');

console.log('BMI to calculate yours\nSpeed to calculate an avarage speed\nPrize to play a prize draw game');
const chosenScript = readline.question('Which script should I execute? ');
switch (chosenScript) {
    case 'BMI':
        myIBM();
        break;
    case 'Speed':
        myAvarageSpeed();
        break;
    case 'Prize':
        myPrizeDraw();
        break;
    default:
        console.log('ERROR 404');
}


