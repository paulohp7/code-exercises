"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDistance = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function makeError(unity) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}
function convert( /*value: number, forUnity: string, toUnity: string*/) {
    const value = readline_sync_1.default.questionFloat('Write the value: ');
    const forUnity = readline_sync_1.default.question('Write the base unit: ');
    const toUnity = readline_sync_1.default.question('Write the conversion unit: ');
    if (!units.includes(forUnity))
        makeError(forUnity); // se a unidade base não for válida lançamos um erro
    if (!units.includes(toUnity))
        makeError(toUnity); // se a unidade para a conversão não for válida lançamos um erro
    const forIndex = units.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    console.log(`${value}${forUnity} is same as ${value * Math.pow(10, exponent)}${toUnity}`);
}
exports.convertDistance = convert;
