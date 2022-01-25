const readline = require('readline-sync');
const fileSystem = require('fs');
const nome = readline.question('Qual o seu nome? ');
console.log(`Oi ${nome}`);