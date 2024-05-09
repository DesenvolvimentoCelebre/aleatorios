const pool = require("../database/connection/connection");

const getStock = async () => {
  const query = `
  SELECT
    nome,
    categoria,
    codigo_produto,
    codigo_personalizado,
    preco_custo,
    tipo,
    SUM(quantidade) AS quantidade,
    img_produto
  FROM
    produto
  GROUP BY 
    nome
  ORDER BY 
    codigo_produto ASC
  `;

  const [results] = await pool.query(query);

  if (results.length === 0) {
    throw new Error("Nenhum item no estoque");
  }

  return results;
};

const addProductToStock = async (product) => {
  const {
    nome,
    categoria,
    saldo,
    preco_custo,
  } = product;

  // Lista de valores para a consulta
  const values = [
    nome,
    categoria,
    saldo,
    preco_custo,
  ];

  const query = `INSERT INTO produto (nome, categoria, saldo, preco_custo,  ) VALUES (?,?,?,?,?,?,?)`;

  const [results] = await pool.query(query, values);

  return results;
};

module.exports = {
  getStock,
  addProductToStock
};
