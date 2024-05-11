// authRoutes.js
const express = require("express");
const { authenticateUser } = require("../../services/auth");
const { errorMiddleware } = require('../../utils/middleware');

const authRouter = express.Router();

authRouter.post("/login", async (req, res, next) => {
  try {
    const { usuario, senha } = req.body;
    const authResponse = await authenticateUser(usuario, senha);

    res.json({
      success: true,
      token: authResponse.token,
      expiration: authResponse.expirationDate,
      nome: authResponse.nome,
      cargo: authResponse.cargo,
      adm: authResponse.adm,
    });
  } catch (err) {
    if (err.message === "Usuário não encontrado" || err.message === "Falha na Autenticação") {
      res.status(401).json({ success: false, errors: [err.message] });
      
      const error = err;
      next(new Error(`Erro ao fazer login, ${error}`));

    } else {
      res.status(500).json({ success: false, errors: ["Erro no Banco de Dados"] });
    }
  }
});

authRouter.use(errorMiddleware);
module.exports = authRouter;
