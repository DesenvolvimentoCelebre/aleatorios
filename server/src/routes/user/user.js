const express = require("express");
const { createUser, getAllUsers, deleteUser } = require("../../services/user");
const { errorMiddleware } = require('../../utils/middleware');
const passport = require("../../config/passport")

const router = express.Router();

router.post('/user', async (req, res) => {
  try {
      await createUser(req.body);
      res.status(201).json({ 
        success: true,
         message: 'Usuário criado com sucesso'
      });
  } catch (error) {
      if (error.message === 'DuplicateUsuario') {
          res.status(400).json({ 
            success: false,
            error: 'Usuário já cadastrado' });
      } else if (error.message === 'DuplicateCPF') {
          res.status(400).json({ 
            success: false,
            error: 'CPF já cadastrado'
           });
      } else if (error.message === 'DuplicateNome') {
          res.status(400).json({ 
            success: false,
            error: 'Nome já cadastrado'
           });
      } else {
          res.status(500).json({ 
            success: false,
            error: 'Erro ao criar usuário',
           });
          next(new Error(`Erro ao criar usuário, ${error}`))
      }
  }
});

router.get(
  "/alluser",
  passport.authenticate("jwt", { session: false }), 
  async (req, res, next) => {
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
      const error = err;
      next(new Error(`Erro ao listar usuários, ${error}`));
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
    const error = err;
    next(new Error(`Erro ao exlcuir usuáro ${error}`))
    res
      .status(500)
      .json({ success: false, error: ['Por favor contate o administrador', err]})
  }
})

router.put('/update', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const { nome_usuario, senha, id } = req.body;

  try {
    const message = await updateUser(id, nome_usuario, senha);
    res.status(200).json({ success: true, message: [message] });
  } catch (err) {
    const error = err;
    next(new Error(`Erro ao atualizar usuário ${error}`))
    res.status(500).json({ success: false, error: ['Erro interno do servidor'] });
  }
});

router.use(errorMiddleware);

module.exports = router;
