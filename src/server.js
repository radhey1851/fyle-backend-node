const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = require('./middlware/auth');
const authorizeUser = require('./controllers/authController');
const { getBranchByIFSC } = require('./controllers/branchController');
const { getBankBranches } = require('./controllers/bankBranchesController');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use('/api', authMiddleware);
app.get('/', (_, res) => res.send('hello world'));

// To get a token
app.get('/auth', authorizeUser);

app.get('/api/branches/:ifsc', getBranchByIFSC);
app.get('/api/banks/:bankName/city/:city', getBankBranches);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
