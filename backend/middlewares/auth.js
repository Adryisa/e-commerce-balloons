const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { Error } = require('mongoose');

dotenv.config();

function auth(req, res, next) {
  const authorization = req.get('Authorization');

  let token = '';
  let decodedToken = null;

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);

      decodedToken = jwt.verify(token, process.env.SECRET);

      console.log(decodedToken);

      next();
    }
  } catch (err) {
    res.status(401).json({
      err: 'token missing or invalid',
    });
  }
}

module.exports = auth;
