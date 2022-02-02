const express = require('express');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonById = require('./middlewares/getSimpsonById');
const createSimpson = require('./middlewares/createSimpson');
const validateIdSimpson = require('./middlewares/validateIdSimpson');
const validateNameSimpson = require('./middlewares/validateNameSimpson'); 

const app = express();
app.use(bodyParser.json());


app.get('/ping', ping);

app.post('/hello', hello);

app.post('/greeting', greeting);

app.use([validateIdSimpson, validateNameSimpson]);

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonById);

app.post('/simpsons', createSimpson);

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Route '${req.path}' does not exist!`});
});

app.listen(3001, () => {
  console.log('Listening the application on port 3001');
});