const listSimpsons = require('../listSimpsons');

function getSimpsonById (req, res) {
    const { id } = req.params;
    listSimpsons().then((data) => {
        const simpsonID = data.find((simpson) => simpson.id === id);
        if(!simpsonID) return res.status(404).json({ message: 'Simpson not found!'});
        res.status(200).json(simpsonID);
    });
  }

  module.exports = getSimpsonById;