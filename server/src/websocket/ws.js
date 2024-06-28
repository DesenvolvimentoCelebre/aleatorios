// websocket.js

const http = require('http');
const WebSocket = require('ws');
const ping = require('ping');
const db = require('../database/connection/connection');

const server = http.createServer();

async function fetchIPs() {
    try {
        const [rows, fields] = await db.execute('SELECT ip FROM imp');
        const ips = rows.map(row => row.ip);
        return ips;
    } catch (error) {
        console.error('Erro ao buscar IPs do banco de dados:', error);
        return [];
    }
}

function pingIPs(ws, targets) {
    targets.forEach(target => {
        ping.sys.probe(target, (isAlive) => {
            const msg = isAlive ? `Ping para ${target} foi bem-sucedido` : `Ping para ${target} falhou`;
            ws.send(msg);
        });
    });
}

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.send('Conexão estabelecida');

    const interval = setInterval(async () => {
        if (ws.readyState === WebSocket.OPEN) {
            const targets = await fetchIPs();
            pingIPs(ws, targets);
        }
    }, 5000);

    ws.on('close', () => {
        clearInterval(interval);
    });

    ws.on('error', (error) => {
        console.error('Erro na conexão:', error);
        ws.send(`Erro na conexão: ${error.toString()}`);
    });
});

module.exports = server;