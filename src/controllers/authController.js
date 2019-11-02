const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { username, password } = req.query;
  let token;

  if (password === process.env.TEST_PASSWORD) {
    token = jwt.sign(username, process.env.TOKEN_SECRET);
    res.status(200).send({ token });
  } else {
    res.status(400).send('Invalid password');
  }
};