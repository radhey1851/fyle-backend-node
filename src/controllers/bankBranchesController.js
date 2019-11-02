const db = require('../db');

const getBranches = async (req, res) => {
  try {
    const { bankName, city } = req.params;
    const { offset, limit } = req.query;
    const { rows } = await db.query(
      'SELECT * FROM bank_branches WHERE bank_name=$1 and city=$2 LIMIT $3 OFFSET $4',
      [bankName, city, limit, offset],
    );
    res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).end(err.message);
  }
};

module.exports = {
  getBranches,
};
