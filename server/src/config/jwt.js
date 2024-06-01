const dotenv = require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET
const tokenExpiration = "1h"

module.exports = {
  jwtSecret,
  tokenExpiration,
};