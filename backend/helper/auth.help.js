const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function checkPasswd(passwd, user) {
  if (!user.passwd) {
    return false;
  }
  await bcrypt.compare(passwd, user.passwd);
}

function createJWT(user) {
  const tokenPayload = {
    name: user.name,
    id: user._id,
  };

  const secret = process.env.SECRET;
  return jwt.sign(tokenPayload, secret);
}

module.exports = { checkPasswd, createJWT };
