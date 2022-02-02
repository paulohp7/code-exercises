const fs = require('fs');

function listTeams(req, res, next) {
    const teams = JSON.parse(fs.readFileSync('./teams.json'));
    if (teams.length == 0) return res.status(200).json({ teams: []});
    res.status(200).json(teams);
};

module.exports = listTeams;