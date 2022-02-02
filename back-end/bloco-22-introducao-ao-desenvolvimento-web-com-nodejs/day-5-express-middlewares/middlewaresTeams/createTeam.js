const fs = require('fs');
const isUpperCase = require('../utils/isUpperCase');

function createTeam(req, res, next) {
    const { name, initials, country } = req.body;
    if (name.length < 6) return next({ statusCode: 404, message: 'invalid data' });
    if (initials.length > 3 || !isUpperCase(initials)) return next({ statusCode: 404, message: 'invalid data' });
    if (country.length < 4) return next({ statusCode: 404, message: 'invalid data' });
    const newData = JSON.parse(fs.readFileSync('./teams.json'));
    newData.push(req.body)
    fs.writeFileSync('./teams.json', JSON.stringify(newData, null, 2));
    return res.status(200).json(req.body);
};

module.exports = createTeam;