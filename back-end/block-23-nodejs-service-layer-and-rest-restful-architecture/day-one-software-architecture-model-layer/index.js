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
    const myMessage = User.isValidCreate(firstName, lastName, email, password);
    if (myMessage === true) {
        const [metaData] = await User.create(firstName, lastName, email, password);
        res.status(201).json({ id: metaData.insertId, ...req.body });
    } else res.status(400).json({ erro: true, message: myMessage })
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    if (!(await User.isValidId(id))) {
        return res.status(404).json({ error: true, message: 'User not found!' });
    }
    const selectedUser = await User.getUserById(id);
    res.status(200).json(selectedUser);
});

app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    if (!(await User.isValidId(id))) {
        return res.status(404).json({ error: true, message: 'User not found!!' });
    }
    const myMessage = User.isValidCreate(firstName, lastName, email, password);
    if (myMessage === true) {
        await User.update(id, firstName, lastName, email, password);
        res.status(201).json(await User.getUserById(id));
    } else res.status(400).json({ erro: true, message: myMessage })
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});