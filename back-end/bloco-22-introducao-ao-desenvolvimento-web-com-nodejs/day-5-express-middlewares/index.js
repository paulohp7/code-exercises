const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerUser = require('./routerUser');
const routerPost = require('./routerPost');
const createTeam = require('./middlewaresTeams/createTeam');
const listTeams = require('./middlewaresTeams/listTeams');
const validateToken = require('./utils/validateToken');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const routerNotFound = (err, _req, res, _next) => res.status(err.statusCode).json({ message: err.message });

app.use('/user', routerUser);

app.get('/pokemon/token', async (req, res, next) => {
  const { authorization } = req.headers;
  if(validateToken(authorization)) {
    return axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(result => res.status(200).json({ message: result.data.name }));
  } 
  res.status(401).json({ message: 'invalid token' });
});

app.use('/post', routerPost);

app.post('/teams', createTeam);

app.get('/teams', listTeams);

app.use('*', function (_req, _res, next) {
  next({ statusCode: 404, message: 'Opsss router not found' }) 
});

app.use(routerNotFound);

app.listen(3000, () => {
  console.log('Listening the application on port 3000');
});
