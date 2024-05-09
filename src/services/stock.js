const pool = require("../database/connection/connection");

const getStock = async () => {
  const query = `
  SELECT
    id,
    nome,
    saldo,
    categoria
  FROM
    estoque
  GROUP BY 
    nome
  ORDER BY 
    id ASC
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
