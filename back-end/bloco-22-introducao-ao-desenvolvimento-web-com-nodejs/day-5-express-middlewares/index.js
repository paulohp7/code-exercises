const express = require('express');
const bodyParser = require('body-parser');
const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');

const app = express();
app.use(bodyParser.json());

app.get('/ping', ping);

app.post('/hello', hello);

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Route '${req.path}' does not exist!`});
});

app.listen(3001, () => {
  console.log('Application listening on port 3001');
});

