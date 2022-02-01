const listSimpsons = require('../listSimpsons');

function validateIdSimpson (req, res, next) {
    const { id } = req.body;
    listSimpsons().then((data) => {
        const simpsonID = data.find((simpson) => simpson.id === id);
        if(simpsonID) return res.status(500).json({ message: 'Cannot create this Simpson!'});
        next();
    });
  }

  module.exports = validateIdSimpson;