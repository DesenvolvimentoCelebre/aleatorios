const express = require('express');
const cors = require('cors');
const router = require('./src/routes/route');
const websocketServer = require('./src/websocket/ws');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const port = 21066;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    websocketServer.listen(port + 1, () => {
        console.log(`WebSocket rodando na porta ${port + 2}`);
    });
});
