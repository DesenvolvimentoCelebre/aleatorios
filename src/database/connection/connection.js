const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const pool = mysql.createPool({
  host: "mysql29-farm10.kinghost.net",
  user: "celebrep01_add1",
  password: "585103Aa",
  database: "celebreprojeto01",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
