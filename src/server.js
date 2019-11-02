const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors);
app.get('/', (_, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Api running on port ${PORT}`));
