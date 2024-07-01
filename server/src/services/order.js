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
    for (const pedido of pedido.pedidos) {
      const sql = `
        INSERT INTO pedido (pedido, cpf_cliente, data_venda, garcom, valor) 
        VALUES (?, ?,CURRENT_TIMESTAMP, ?, ?)
      `;

      const values = [
        pedido.pedido,
        pedido.cpf_cliente,
        pedido.data_venda,
        pedido.garcom,
        pedido.valor,
      ];

      await connection.query(sql, values); 
    }

    for (const produto of pedido.produto) {
      const sqlpay = `INSERT INTO pedno (pedido, codigo_produto, unino, valor_unit) VALUES (?,?,?,?)`;
      const values2 = [
        produto.pedido,
        produto.codigo_produto,
        produto.unino,
        produto.valor_unit
      ];

      await connection.query(sqlpay, values2);
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