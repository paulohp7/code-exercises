const fs = require('fs').promises;
const readline = require('readline-sync');

function substituteWord(oldWord, newWord, data) {
    const newString = data.replace(new RegExp(oldWord, 'g'), newWord);
    return newString;
}

async function readFile(file) {
    await fs.readFile(`./newFiles/${file}`, 'utf8')
        .then(data => {
            console.log(`Your file content: ${data}`);
            const chosenWord = readline.question('Which word do you wanna substitute? ');
            const newWord = readline.question('Write your new word: ');
            newString = substituteWord(chosenWord, newWord, data);
            console.log(`Your new string: ${newString}`);
            const newFile = readline.question('Write the name of your new file: ');
            fs.writeFile(`./newFiles/${newFile}`, newString)
                .then(() => console.log('New file written sucessful'))
                .catch((err) => console.error(`Error: ${err.message}`));
        })
        .catch((err) => {
            console.error(`Cannot read the file ${file}\n${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
}

const chosenFile = readline.question('Which file do you wanna to switch words? ');
readFile(chosenFile);