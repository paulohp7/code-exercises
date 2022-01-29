const { expect } = require('chai');

const numberFunction = require('../numberFunction');

describe('Valid inputs in numberFunction', () => {
    it('returns "Positive" with a positive input (in this case is four)', () => {
        const resposta = numberFunction(4);
        expect(resposta).to.be.equals('Positive');
    });
    it('returns "Negative" with a negative input (in this case is minus 3)', () => {
        const resposta = numberFunction(-3);
        expect(resposta).to.be.equals('Negative');
    });
    it('returns "Neutral" with 0 as input', () => {
        const resposta = numberFunction(0);
        expect(resposta).to.be.equals('Neutral');
    });
    it('returns "Error" with a string input (in this case is "f"', () => {
        const resposta = numberFunction('f');
        expect(resposta).to.be.equals('Error');
    });
});