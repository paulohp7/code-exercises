const express = require('express');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const listSimpsons = require('./listSimpsons');

const app = express();
app.use(bodyParser.json());


app.get('/ping', function (req, res) {
  res.status(200).json({ "message": 'pong' });
});

app.post('/hello', function (req, res) {
    const { name } = req.body;
    res.status(201).json({ message:`Hello ${name}!` });
  });

app.post('/greetings', function (req, res) {
    const { name, age } = req.body;
    if (age > 17) res.status(200).json({ message:`Hello ${name}!` });
    else res.status(401).json({ "message": "Unauthorized" })
});

app.put('/users/:name/:age', function (req, res) {
    const { name, age } = req.params;
    res.status(200).json({ "message": `Your name is ${name} and you are ${age} years old` });
});

app.get('/simpsons', function(req, res) {
    listSimpsons().then((data) => res.status(200).json(data));
});

app.get('/simpsons/:id', function (req, res) {
  const { id } = req.params;
  listSimpsons().then((data) => {
      const simpsonID = data.find((simpson) => simpson.id === id);
      if(!simpsonID) return res.status(404).json({ message: 'Simpson not found!'});
      res.status(200).json(simpsonID);
  });
});

app.post('/simpsons', function (req, res) {
    const { id, name } = req.body;
    listSimpsons().then((data) => {
        const simpsonID = data.find((simpson) => simpson.id === id);
        if(simpsonID) return res.status(409).json({ message: 'id already exists' });
        data.push({ id, name })
        let stringData = JSON.stringify(data, null, 2);
        fs.writeFile('./simpsons.json', stringData)
            .then(() => { console.log('File sucessful written!'); })
            .catch((err) => { console.error(`Write error: ${err.message}`); });
        res.status(204).end();
    });
  });

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Route '${req.path}' does not exist!`});
});

app.listen(3001, () => {
  console.log('Listening the application on port 3001');
});