const pool = require("../database/connection/connection");

const getNextOrderNumber = async () => {
  const query = "SELECT MAX(pedido) + 1 as proximoNumero FROM pedidos";

  const [results] = await pool.query(query);

  if (results.length === 0) {
    throw new Error("Não foi possível obter o próximo número do pedido");
  }

  return results[0].proximoNumero; // Devolve apenas o número
};

const createOrder = async (pedido) => {
  const connection = await pool.getConnection(); 

  try {
    await connection.beginTransaction(); 
    for (const produto of pedido.produtos) {
      const sql = `
        INSERT INTO pedido (pedido, cpf_cliente, data_venda, garcom, valor) 
        VALUES (?, ?,CURRENT_TIMESTAMP, ?, ?)
      `;

      const values = [
        produto.pedido,
        produto.cpf_cliente,
        produto.data_venda,
        produto.garcom,
        produto.valor,
      ];

      await connection.query(sql, values); 
    }

    await connection.commit();
    console.log("Transação commitada com sucesso.");
  } catch (err) {
    await connection.rollback();
    console.error("Erro durante a transação:", err);
    throw new Error("Erro ao processar pedido");
  } finally {
    connection.release(); 
  }
};

module.exports = {
  getNextOrderNumber,
  createOrder
};