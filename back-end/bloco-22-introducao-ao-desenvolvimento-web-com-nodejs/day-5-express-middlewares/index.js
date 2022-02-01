const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  if (password.length > 3 && password.length < 9) {
    return password.match(/^[0-9]*$/);
  };
  return false;
}
  
const authMiddleware = (req, res, _next) => {
  const { username, email, password } = req.body;
  
  if (username.length > 3 && validateEmail(email) && validatePassword(password)) {
    res.status(201).json({ message: 'user created' });
  } else res.status(400).json({ message: 'invalid data' });

};

app.post('/user/register', authMiddleware);

app.listen(3000, () => {
  console.log('Listening the application on port 3000');
});
