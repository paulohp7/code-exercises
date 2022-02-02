const express = require('express');
const router = express.Router();
const validateEmail = require('./utils/validateEmail');
const validatePassword = require('./utils/validatePassword');
const createToken = require('./utils/createToken');
  
  const authMiddlewareUsername = (req, res, next) => {
      const { username } = req.body;
      if (username.length > 3) return next();
      return res.status(400).json({ message: 'invalid data' });
  };

  const authMiddlewareEmail = (req, res, next) => {
      const { email } = req.body;
      if (validateEmail(email)) return next();
      return res.status(400).json({ message: 'invalid data' });
  };

  const authMiddlewarePassword = (req, res, next) => {
      const { password } = req.body;
      if (validatePassword(password)) return next();
      return res.status(400).json({ message: 'invalid data' });
  };
    
  const register = (req, res) => {
      res.status(201).json({ message: 'user created' });
  };
  
  const login = (req, res) => {
    res.status(200).json({ token: createToken(12) });
    // res.status(400).json({ message: 'email or password is incorrect' });
}

router.post('/register', authMiddlewareUsername, authMiddlewareEmail, authMiddlewarePassword, register);
router.post('/login', authMiddlewareEmail, authMiddlewarePassword, login);

module.exports = router;