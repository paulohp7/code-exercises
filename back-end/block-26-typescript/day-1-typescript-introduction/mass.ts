import readline from 'readline-sync';

const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convert(/*value: number, forUnity: string, toUnity: string*/): void {

    const value = readline.questionFloat('Write the value: ');
    const forUnity = readline.question('Write the base unit: ');
    const toUnity = readline.question('Write the conversion unit: ');

    if (!units.includes(forUnity)) makeError(forUnity); // se a unidade base não for válida lançamos um erro
    if (!units.includes(toUnity)) makeError(toUnity); // se a unidade para a conversão não for válida lançamos um erro

    const forIndex = units.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

    console.log(`${value}${forUnity} is the same as ${value * Math.pow(10, exponent)}${toUnity}`)
}

export { convert as convertMass };