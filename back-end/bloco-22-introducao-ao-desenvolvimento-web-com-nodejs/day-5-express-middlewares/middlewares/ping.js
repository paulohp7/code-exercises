function ping(req, res, next) {
    res.status(200).json({ message: 'pong'});
  
    next();
  };

  module.exports = ping;