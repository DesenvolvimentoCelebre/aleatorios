const express = require("express");
const passport = require("passport");
const { createUser, getAllUsers, deleteUser } = require("../../services/user");

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const { nome, nome_usuario, senha, cargo } = req.body;

    await createUser(nome, nome_usuario, senha, cargo);

    res
      .status(201)
      .json({ success: true, message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res
      .status(500)
      .json({ success: false, error: ["Erro ao cadastrar usuário"] });
  }
});

router.get(
  "/alluser",
  passport.authenticate("jwt", { session: false }), 
  async (req, res) => {
    try {
      const users = await getAllUsers(); 
      
      if (users.length === 0) {
        res.status(404).json({
          success: true,
          message: ["Nenhum usuário cadastrado"],
        });
      } else {
        res.status(200).json({
          success: true,
          data: users,
        });
      }
    } catch (err) {
      console.error("Erro ao obter usuários:", err);

      res.status(500).json({
        success: false,
        error: ["Erro ao buscar usuários. Por favor, contate o administrador."],
      });
    }
  }
);

router.delete('/delete', async (req, res) => {
  try {
    const {id} = req.body;
    await deleteUser(id);
    
    res
      .status(201)
      .json({ success: true, message: ['Usuário excluido com sucesso']})
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: ['Por favor contate o administrador', err]})
  }
})

router.put('/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { nome_usuario, senha, id } = req.body;

  try {
    const message = await updateUser(id, nome_usuario, senha);
    res.status(200).json({ success: true, message: [message] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: ['Erro interno do servidor'] });
  }
});

module.exports = router;
