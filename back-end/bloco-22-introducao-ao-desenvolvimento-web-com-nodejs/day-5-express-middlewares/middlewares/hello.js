function hello(req, res, _next) {
    const { name } = req.body
    res.status(201).json({ message: `Hello ${name}!`});
  };

  module.exports = hello;