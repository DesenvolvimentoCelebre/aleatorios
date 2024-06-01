const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../database/connection/connection");
// const { jwtSecret, tokenExpiration } = require("../config/jwt");

const jwtSecret = "token";
const tokenExpiration = "1h";

const authenticateUser = async (usuario, senha) => {
  const query = `
  SELECT 
  id, 
  UPPER(nome) AS nome, 
  usuario, 
  senha, 
  UPPER(cargo) AS cargo, 
  adm
FROM usuario
WHERE usuario = ?`

  const [results] = await pool.query(query, [usuario]);

  if (results.length !== 1) {
    throw new Error("Usuário não encontrado");
  }

  const user = results[0];
  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) {
    throw new Error("Falha na Autenticação");
  }

  const payload = { id: user.id, usuario: user.usuario };
  const token = jwt.sign(payload, jwtSecret, { expiresIn: tokenExpiration });
  const decodedToken = jwt.decode(token);
  const expirationDate = new Date(decodedToken.exp * 1000);

  return {
    token,
    expirationDate,
    nome: user.nome,
    cargo: user.cargo,
    adm: user.adm,
  };
};

module.exports = {
  authenticateUser,
};
