const fs = require('fs').promises;

const mySimpsons = './simpsons.json';

async function listSimpsons() {
    const names = await fs.readFile(mySimpsons)
        .then(data => JSON.parse(data))
        .catch((err) => {
            console.error(`Não foi possível ler o arquivo ${mySimpsons}\n Erro: ${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
    return names;
}

async function printSimpsons() {
    const list = await listSimpsons()
    list.forEach(element => { console.log(`id: ${element.id} nome: ${element.name}`) });
}

function simpsonsID(myId) {
    const promise = new Promise(async (resolve, reject) => {
        const list = await listSimpsons();
        const myIdSimpson = list.find(element => element.id == myId);
        if (myIdSimpson) resolve(myIdSimpson);
        reject(new Error('Id not found!'));
    });
    return promise;
}

printSimpsons();

simpsonsID(2)
    .then(result => console.log(`Id: ${result.id}, Name: ${result.name}.`))
    .catch(err => console.log(`Error: ${err.message}`));
simpsonsID(20)
    .then(result => console.log(`Id: ${result.id}, Name: ${result.name}.`))
    .catch(err => console.log(`Error: ${err.message}`));


