const fs = require('fs').promises;

function manipulateTxtFiles() {
    Promise.all([
        fs.readFile('./files/file1.txt'),
        fs.readFile('./files/file2.txt'),
        fs.readFile('./files/file3.txt'),
      ])
        .then(([file1, file2, file3]) => {
          const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
          console.log(`3 files have been read. Totalized: ${fileSizeSum} bytes`);
        })
        .catch((err) => {
          console.error(`Error to read the files: ${err.message}`);
        });
    Promise.all([
        fs.writeFile('./files/file1.txt', 'First file modified'),
        fs.writeFile('./files/file2.txt', 'Second file modified'),
        fs.writeFile('./files/file3.txt', 'Third file modified'),
        ])
        .then(() => {
            console.log(`3 files have been written.`);
        })
        .catch((err) => {
            console.error(`Error to write the files: ${err.message}`);
        });
}

manipulateTxtFiles();

