const db = require('../db');

const getBranchByIFSC = async (req, res) => {
  try {
    const { ifsc } = req.params;
    const { rows } = await db.query('SELECT * FROM branches WHERE ifsc = $1', [ifsc]);
    res
      .status(200)
      .send(rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).end(err.message);
  }
};


module.exports = {
  getBranchByIFSC,
};
