const router = require("express").Router();
const query = require("../database");

router.get("/", (req, res) => {
  query(`SELECT * FROM parcel_price`, (err, data) => {
    if (err) res.status(500).send({ error: error.message });
    res.status(200).send(data);
  });
});

router.get("/:id", async (req, res) => {
  const parcel_id = parseInt(req.params.id);
  try {
    const response = await query(
      `SELECT * FROM parcel p 
      JOIN products pr ON pr.categoryID = p.categoryID
      JOIN categories c ON c.id = pr.categoryID
      WHERE p.parcelID = ${parcel_id}`
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
