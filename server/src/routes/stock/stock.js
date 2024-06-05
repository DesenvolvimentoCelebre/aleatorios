const express = require("express");
const { getStock, addProductToStock } = require("../../services/stock");
const { errorMiddleware } = require('../../utils/middleware');


const router = express.Router();

router.get("/read", async (req, res, next) => {
  try {
    const stockData = await getStock();
    
    res.status(200).json({
      success: true,
      data: stockData,
    });
  } catch (err) {
    console.error("Erro ao obter estoque:", err);
    
    const error = err;
    next(new Error(`Erro ao listar estoque, ${error}`));

    if (results.length === 0) {
      res.status(404).json({
        success: true,
        message: ["Você não possui itens no estoque"],
      });
    } else {
      res.status(500).json({
        success: false,
        error: ["Erro ao obter estoque. Por favor, contate o administrador.", err],
      });
      const error = err;
      next(new Error(`Erro ao listar estoque, ${error}`));
    }
  }
});

router.post("/send", async (req, res, next) => {
    try {
      const product = req.body;
  
      const requiredFields = [
        "nome",
        "saldo",
        "categoria",
        "preco_custo"
      ];
  
      const missingFields = requiredFields.filter((field) => !product[field]);
  
      if (missingFields.length > 0) {
        res.status(400).json({
          success: false,
          error: [`Campos faltantes: ${missingFields.join(", ")}`],
        });
        return;
      }
  
      await addProductToStock(product);
  
      res.status(201).json({
        success: true,
        message: "Produto cadastrado com sucesso",
      });
    } catch (err) {
      console.error("Erro ao cadastrar produto:", err);
      
      const error = err;
      next(new Error(`Erro ao cadastar produto, ${error}`));

      res.status(500).json({
        success: false,
        error: ["Erro ao cadastrar produto", err.message],
      });
    }
  });

router.use(errorMiddleware);

module.exports = router;
