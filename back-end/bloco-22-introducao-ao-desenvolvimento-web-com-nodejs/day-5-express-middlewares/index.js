const express = require('express');
const bodyParser = require('body-parser');
const routerUser = require('./routerUser');

const app = express();
app.use(bodyParser.json());

app.use('/user', routerUser);

app.listen(3000, () => {
  console.log('Listening the application on port 3000');
});
