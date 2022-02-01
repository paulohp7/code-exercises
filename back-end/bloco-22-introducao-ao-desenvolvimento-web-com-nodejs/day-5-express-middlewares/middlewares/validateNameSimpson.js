function validateNameSimpson (req, res, next) {
    const { name } = req.body;
    if (!name || name === null) return res.status(500).json({ message: 'Name is mandatory!'});
    next();    
};

module.exports = validateNameSimpson;