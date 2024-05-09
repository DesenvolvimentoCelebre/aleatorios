const express = require("express");
const { getStock } = require("../../services/stock");

const router = express.Router();

router.get("/read", async (req, res) => {
  try {
    const stockData = await getStock();
    
    res.status(200).json({
      success: true,
      data: stockData,
    });
  } catch (err) {
    console.error("Erro ao obter estoque:", err);

    if (err.message === "Nenhum item no estoque") {
      res.status(404).json({
        success: true,
        message: ["Você não possui itens no estoque"],
      });
    } else {
      res.status(500).json({
        success: false,
        error: ["Erro ao obter estoque. Por favor, contate o administrador.", err],
      });
    }
  }
});

router.post("/send", async (req, res) => {
    try {
      const product = req.body;
  
      const requiredFields = [
        "nome",
        "categoria",
        "codigo_personalizado",
        "preco_custo",
        "tipo",
        "quantidade",
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
      res.status(500).json({
        success: false,
        error: ["Erro ao cadastrar produto", err.message],
      });
    }
  });

module.exports = router;
