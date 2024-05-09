const dotenv = require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  tokenExpiration: "1h", // Padrão de tempo para expiração do token
};