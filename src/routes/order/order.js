const express = require("express");
const { getNextOrderNumber } = require("../../services/order");

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

module.exports = router;
