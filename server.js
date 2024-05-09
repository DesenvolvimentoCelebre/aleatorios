const express = require('express');
const { startKeepalive } = require("./src/database/keepalive/keepalive");

const router = require('./src/routes/route');

const app = express();

app.use(express.json());
app.use('/api', router);

const port = 21066

app.listen(21778, () => {
    console.log(`Servidor rodando na porta ${port}`);
})