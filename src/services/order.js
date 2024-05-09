const pool = require("../database/connection/connection");

const getNextOrderNumber = async () => {
  const query = "SELECT MAX(pedido) + 1 as proximoNumero FROM pedidos";

  const [results] = await pool.query(query);

  if (results.length === 0) {
    throw new Error("Não foi possível obter o próximo número do pedido");
  }

  return results[0].proximoNumero; // Devolve apenas o número
};

module.exports = {
  getNextOrderNumber,
};
