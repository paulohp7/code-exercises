const fs = require('fs').promises;
const readline = require('readline-sync');

async function readFile(file) {
    const myFile = await fs.readFile(`./newFiles/${file}`)
        .then(data => console.log(`Your file content: ${data}`))
        .catch((err) => {
            console.error(`Cannot read the file ${file}\n${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
}

const chosenFile = readline.question('Which file do you wanna read? ');
readFile(chosenFile);



