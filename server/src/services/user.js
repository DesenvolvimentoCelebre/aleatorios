const bcrypt = require("bcrypt");
const pool = require("../database/connection/connection");

async function createUser(userData) {
  try {
      const result = await pool.query(
          "INSERT INTO usuario (nome, nome_usuario, cpf, senha, cargo) VALUES (?, ?, ?, ?, ?)",
          [userData.nome, userData.nome_usuario, userData.cpf, userData.senha, userData.cargo]
      );
      return result;
  } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
          if (error.sqlMessage.includes('for key \'usuario\'')) {
              throw new Error('DuplicateUsuario');
          }
          if (error.sqlMessage.includes('for key \'cpf\'')) {
              throw new Error('DuplicateCPF');
          }
          if (error.sqlMessage.includes('for key \'nome\'')) {
              throw new Error('DuplicateNome');
          }
      }
      throw error;
  }
}

const getAllUsers = async () => {
  const query = `SELECT id, nome, usuario AS nome_usuario, cargo, adm FROM usuario`;

  const [results] = await pool.query(query);

  return results;
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM usuario WHERE id = ?'
  const values = [id];

  const [results] = await pool.query(query, values);

  return results;
}

const updateUser = async (id, nomeUsuario, senha) => {
  let query = 'UPDATE usuario SET usuario = ?';
  const values = [nomeUsuario];

  if (senha && senha.trim() !== '') {
    const hashedPassword = await bcrypt.hash(senha, 10);
    query += ', senha = ?';
    values.push(hashedPassword);
  }

  query += ' WHERE id = ?';
  values.push(id);

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) {
        reject('Erro ao atualizar o usuário');
      } else {
        resolve('Usuário alterado com sucesso');
      }
    });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser
};

