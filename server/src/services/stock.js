const pool = require("../database/connection/connection");

const getStock = async () => {
  try {
    const query = `
    SELECT
      id,
      nome,
      saldo,
      categoria,
      preco_custo as preco
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

  const query = `INSERT INTO estoque (nome, categoria, saldo, preco_custo  ) VALUES (?,?,?,?)`;

  const [results] = await pool.query(query, values);

  return results;
};

async function productUpdate({ bit, saldo, id }) {
  try {
    let query = 'UPDATE estoque SET bit = ?';
    const values = [bit];

    if (saldo && saldo.trim() !== '') { 
      query += ', saldo = ?'; 
      values.push(saldo);
    }

    query += ' WHERE id = ?';
    values.push(id);

    await pool.query(query, values);
    return { success: true, message: 'Produto atualizado com sucesso' };
  } catch (error) {
    return { success: false, error: ['Erro interno do servidor'] };
  }
}

module.exports = {
  getStock,
  addProductToStock,
  productUpdate
};
