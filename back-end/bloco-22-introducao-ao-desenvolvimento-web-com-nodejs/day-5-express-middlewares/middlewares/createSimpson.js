const fs = require('fs').promises;
const listSimpsons = require('../listSimpsons');

function createSimpson (req, res) {
    const { id, name } = req.body;
    listSimpsons().then((data) => {
        const simpsonID = data.find((simpson) => simpson.id === id);
        if(simpsonID) return res.status(409).json({ message: 'id already exists' });
        data.push({ id, name })
        let stringData = JSON.stringify(data, null, 2);
        fs.writeFile('./simpsons.json', stringData)
            .then(() => { console.log('File sucessful written!'); })
            .catch((err) => { console.error(`Write error: ${err.message}`); });
        res.status(204).end();
    });
};

module.exports = createSimpson;