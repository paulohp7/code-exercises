const readline = require('readline-sync');

function myAvarageSpeed() {
    const distance = readline.questionInt('What is the distance in meters? ');
    const seconds = readline.questionInt('How many seconds? ');
    const speed = distance / seconds;
    console.log(`Your avarage speed is: ${speed} meters per second`);
}

module.exports = myAvarageSpeed;