const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));