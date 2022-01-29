const fs = require('fs');

function writeFunction(file, dataToBeWritten) {
    try {
        fs.writeFileSync(file, dataToBeWritten);
        return 'ok';
    } catch (err) {
        console.error(`Your error is: ${err}`);
        return null;
    }
}

// writeFunction('./newFile', 123);
module.exports = writeFunction;