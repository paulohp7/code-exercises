const fs = require('fs').promises;

const MY_SIMPSONS_FILE = './simpsons.json';

async function listSimpsons() {
    const names = await fs.readFile(MY_SIMPSONS_FILE)
        .then(data => JSON.parse(data))
        .catch((err) => {
            console.error(`Cannot read the file ${MY_SIMPSONS_FILE}\n Erro: ${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
    return names;
}

module.exports = listSimpsons;