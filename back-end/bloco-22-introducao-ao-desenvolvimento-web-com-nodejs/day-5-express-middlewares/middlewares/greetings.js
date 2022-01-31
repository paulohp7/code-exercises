function greetings(req, res) {
    const { name, age } = req.body;
    if (age < 18) res.status(401).json({ "message": "Unauthorized" });
    else res.status(201).json({ message: `Hello ${name}!`});
  };

  module.exports = greetings;