// keepalive.js
const pool = require("../connection/connection");

const KEEPALIVE_INTERVAL = 60000; // 60 segundos

function startKeepalive() {
  setInterval(async () => {
    try {
      await pool.query("SELECT 1"); // Pinga o banco de dados para manter a conexão
      console.log("Conexão com o banco de dados mantida viva");
    } catch (err) {
      console.error("Erro ao manter a conexão viva:", err);
    }
  }, KEEPALIVE_INTERVAL);
}

module.exports = { startKeepalive };
