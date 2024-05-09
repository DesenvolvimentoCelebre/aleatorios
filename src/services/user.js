const bcrypt = require("bcrypt");
const pool = require("../database/connection/connection");

const createUser = async (nome, nome_usuario, senha, cargo) => {
  const hashedSenha = await bcrypt.hash(senha, 10); 
  const query = 'INSERT INTO usuario (nome, usuario, senha, cargo) VALUES (?, ?, ?, ?)'
  const values = [nome, nome_usuario, hashedSenha, cargo];

  const [results] = await pool.query(query, values);

  return results;
};

const getAllUsers = async () => {
  const query = `SELECT id, nome, usuario AS nome_usuario, cargo, adm FROM usuario`;

  const [results] = await pool.query(query);

  return results;
};

module.exports = {
  createUser,
  getAllUsers
};

