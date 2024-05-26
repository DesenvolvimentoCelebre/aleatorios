const pool = require("../database/connection/connection");

const getStock = async () => {
  try {
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
      return ({
        success: true,
        message: ['Nenhum produto Cadastrado no estoque']
      })
    }

    return results;
  } catch (error) {
    return ({
      success:false,
      error:['Erro ao listar estoque, por favor entrar em contato com administador']
    })
  }
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
