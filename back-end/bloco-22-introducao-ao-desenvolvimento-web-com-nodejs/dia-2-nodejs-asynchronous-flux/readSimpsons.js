const fs = require('fs').promises;

const mySimpsons = './simpsons.json';

async function listSimpsons() {
    const names = await fs.readFile(mySimpsons)
        .then(data => JSON.parse(data))
        .catch((err) => {
            console.error(`Não foi possível ler o arquivo ${mySimpsons}\n Erro: ${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
    names.forEach(element => { console.log(`id: ${element.id} nome: ${element.name}`);
    });
}

listSimpsons();



