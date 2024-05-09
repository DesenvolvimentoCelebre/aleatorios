const express = require('express');
const { startKeepalive } = require("./src/database/keepalive/keepalive");

const router = require('./src/routes/route');

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(21778, () => {
    console.log('Server is running on port 21778');
})