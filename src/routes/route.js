const express = require('express');
const { errorMiddleware } = require('../utils/middleware');

const authRouter = require('./auth/auth');
const userRouter = require('./user/user');
const stockRouter = require('./stock/stock');
const orderRouter = require('./order/order')

const router = express.Router();

router.use(errorMiddleware);

router.use('/auth', authRouter);
router.use(userRouter);
router.use('/stock', stockRouter);
router.use('/order', orderRouter);

module.exports = router