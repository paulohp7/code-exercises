const listSimpsons = require('../listSimpsons');

function getSimpsons (req, res) {
    listSimpsons().then((data) => res.status(200).json(data));
}

module.exports = getSimpsons;