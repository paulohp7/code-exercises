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

function createFiles() {
    const myArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const promisesArray = myArray.map((element, index) => fs.writeFile(`./newFiles/file${index}.txt`, element))
    Promise.all(promisesArray)
        .then(() => {
            console.log(`All files have been sucessful written.`);
        })
        .catch((err) => {
            console.error(`Error to write the files: ${err.message}`);
        });
    Promise.all([
        fs.readFile('./newFiles/file0.txt'),
        fs.readFile('./newFiles/file1.txt'),
        fs.readFile('./newFiles/file2.txt'),
        fs.readFile('./newFiles/file3.txt'),
        fs.readFile('./newFiles/file4.txt'),
    ])
        .then(([file0, file1, file2, file3, file4]) => {
            const concatenedData = file0 + ' ' + file1 + ' ' + file2 + ' ' + file3 + ' ' + file4;
            fs.writeFile('./newFiles/fileAll.txt', concatenedData)
                .then(() => console.log('fileAll has sucessful written'))
                .catch((err) => console.error(`Error to write the files: ${err.message}`));
        })
        .catch((err) => console.error(`Error to read the files: ${err.message}`));
}

// manipulateTxtFiles();

createFiles();

