const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.Authorization;

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) {
      res.status(403).send('Invalid authorization credentials');
    } else {
      next();
    }
  });
};
