import { convertDistance } from './length';
import { convertMass } from './mass';
import readline from 'readline-sync';

console.log('Type Distance to distance conversion\nType Mass to mass convertion');
const chosenScript = readline.question('Which script should I execute? ');
switch (chosenScript) {
    case 'Distance':
        convertDistance();
        break;
    case 'Mass':
        convertMass();
        break;
    default:
        console.log('ERROR 404');
}

// console.log(convertDistance(1, 'km', 'hm')); // 10
// console.log(convertDistance(1, 'km', 'm')); // 1000
// try {
//     console.log(convertDistance(1, 'km', 'x')); // erro
// } catch(e: any) {
//     console.log(e.message);
// }
// console.log(convertMass(1, 'kg', 'hg')); // 10
// console.log(convertMass(1, 'kg', 'g')); // 1000
// try {
//     console.log(convertMass(1, 'km', 'km')); // erro
// } catch(e: any) {
//     console.log(e.message);
// }
