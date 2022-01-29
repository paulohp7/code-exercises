const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const writeFileFunction = require('../writeFileFunction');
const SUCESS_WRITE = 'ok';

describe('In writeFileFunction', () => {
    describe('When is a sucessful write returns "ok"', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync').returns(SUCESS_WRITE);
        });
        it('Confirms that the write was sucessful', () => {
            const myReturnFromWriteFunction = writeFileFunction('./myFile', 'My data sucessful written');
            expect(myReturnFromWriteFunction).to.be.equals('ok');
        });
        after(() => {
            fs.writeFileSync.restore();
        });
    });
    describe('When is an invalid data', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync').throws(new Error('invalid data'));
        });
        it('Returns a error when try to put a invalid data', () => {
            expect(writeFileFunction('./myFile', 123)).to.equal(null);
        });
        after(() => {
            fs.writeFileSync.restore();
        });
    });
});
