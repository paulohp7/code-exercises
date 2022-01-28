const fs = require('fs').promises;

const mySimpsons = './simpsons.json';
const simpsonsFamily = './simpsonFamily.json';

const memberNelson = { id: '11', name: 'Nelson Muntz'};
const memberMeggie = { id: '5', name: 'Meggie Simpson'};

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

function filterSimpsons(myId) {
    const promise = new Promise(async (resolve, reject) => {
        const list = await listSimpsons();
        const newArray = list.filter(element => element.id != myId);
        console.log(newArray);
        resolve(newArray);
        reject(new Error('I got a error!'));
    });
    return promise;
}

function rewriteSimpsons(myArray) {
    let data = JSON.stringify(myArray, null, 2);
    fs.writeFile('./simpsons.json', data)
        .then(() => { console.log('File sucessful written!'); })
        .catch((err) => { console.error(`Write error: ${err.message}`); });
}

async function createFamilySimpsons() {
    const list = await listSimpsons();
    let newArray = list.filter(element => (element.id == 1 || element.id == 2 || element.id == 3 || element.id == 4));
    console.log(newArray);
    let data = JSON.stringify(newArray, null, 2);
    fs.writeFile('./simpsonFamily.json', data)
        .then(() => { console.log('File sucessful written!'); })
        .catch((err) => { console.error(`Write error: ${err.message}`); });
}

async function listSimpsonsFamily() {
    const names = await fs.readFile(simpsonsFamily)
        .then(data => JSON.parse(data))
        .catch((err) => {
            console.error(`Não foi possível ler o arquivo ${mySimpsons}\n Erro: ${err}`);
            process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
        });
    return names;
}

async function addSimpsonsMember(member) {
    const list = await listSimpsonsFamily();
    list.push(member);
    let data = JSON.stringify(list, null, 2);
    fs.writeFile('./simpsonFamily.json', data)
        .then(() => { console.log('File sucessful written!'); })
        .catch((err) => { console.error(`Write error: ${err.message}`); });

}

async function switchSimpsonsMember(oldMember, newMember) {
    const list = await listSimpsonsFamily();
    switchArray = list.map(member => {
        if (member.id == oldMember.id) return newMember;
        else return member;
    })
    let data = JSON.stringify(switchArray, null, 2);
    fs.writeFile('./simpsonFamily.json', data)
        .then(() => { console.log('File sucessful written!'); })
        .catch((err) => { console.error(`Write error: ${err.message}`); });   
}

// printSimpsons();

// simpsonsID(2)
//     .then(result => console.log(`Id: ${result.id}, Name: ${result.name}.`))
//     .catch(err => console.log(`Error: ${err.message}`));
// simpsonsID(20)
//     .then(result => console.log(`Id: ${result.id}, Name: ${result.name}.`))
//     .catch(err => console.log(`Error: ${err.message}`));

// filterSimpsons(1)
//     .then(data => rewriteSimpsons(data));

// createFamilySimpsons();

// addSimpsonsMember(memberNelson);

switchSimpsonsMember(memberNelson, memberMeggie);


