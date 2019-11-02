const express = require('express');
const cors = require('cors');

const { getBranchByIFSC } = require('./controllers/branchController');
const { getBranches } = require('./controllers/bankBranchesController');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.get('/', (_, res) => res.send('hello world'));

app.get('/api/branches/:ifsc', getBranchByIFSC);
app.get('/api/bank-branches/:bankName/city/:city', getBranches);

app.listen(PORT, () => console.log(`Api running on port ${PORT}`));
