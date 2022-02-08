const e = require('express');
const express = require('express');
const User = require('./models/Users');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/user', async (_req, res) => {
    const myUsers = await User.getAll();
    res.status(200).json(myUsers);
});

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName) res.status(400).json({ error: true, message: 'Name is mandatory' });
    else if (!lastName) res.status(400).json({ error: true, message: 'Last Name is mandatory' });
    else if (!email) res.status(400).json({ error: true, message: 'Email is mandatory' });
    else if (!password) res.status(400).json({ error: true, message: 'Password is mandatory' });
    else if (password.length < 6) res.status(400).json({ error: true, message: 'Password must have at least 6 digits' });
    else {
        const [metaData] = await User.create(firstName, lastName, email, password);
        res.status(201).json({ id: metaData.insertId, ...req.body });
    }
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});