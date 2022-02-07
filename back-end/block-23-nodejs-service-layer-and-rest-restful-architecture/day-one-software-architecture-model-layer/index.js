const express = require('express');
const User = require('./models/Users');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/users', async (_req, res) => {
    const myUsers = await User.getAll();
    res.status(200).json(myUsers);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});