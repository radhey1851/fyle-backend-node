const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(req.headers);
  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) {
      console.log(err);
      res.status(403).send('Invalid authorization credentials');
    } else {
      next();
    }
  });
};
