"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const length_1 = require("./length");
const mass_1 = require("./mass");
const readline_sync_1 = __importDefault(require("readline-sync"));
console.log('Type Distance to distance conversion\nType Mass to mass convertion');
const chosenScript = readline_sync_1.default.question('Which script should I execute? ');
switch (chosenScript) {
    case 'Distance':
        (0, length_1.convertDistance)();
        break;
    case 'Mass':
        (0, mass_1.convertMass)();
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
