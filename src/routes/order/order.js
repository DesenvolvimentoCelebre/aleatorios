const express = require("express");
const { getNextOrderNumber, createOrder } = require("../../services/order");

const router = express.Router();

router.get("/next", async (req, res) => {
  try {
    const nextOrderNumber = await getNextOrderNumber();

    res.status(200).json({
      success: true,
      nextOrderNumber,
    });
  } catch (err) {
    console.error("Erro ao obter o próximo número do pedido:", err);
    res.status(500).json({
      success: false,
      error: ["Erro ao buscar número do pedido"],
    });
  }
});

router.post("/pedido", async (req, res) => {
  if (!req.body || !req.body.pedido || !req.body.pedido.produtos) {
    return res.status(400).json({
      success: false,
      error: ["Formato de pedido inválido"],
    });
  }

  try {
    const pedido = req.body.pedido;
    await createOrder(pedido);

    res.status(201).json({
      success: true,
      message: "Pedido enviado com sucesso!",
    });
  } catch (err) {
    console.error("Erro ao enviar pedido:", err);
    res.status(500).json({
      success: false,
      error: ["Erro ao enviar pedido. Por favor, tente novamente."],
    });
  }
});

module.exports = router;