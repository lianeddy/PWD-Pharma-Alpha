const router = require("express").Router();
const query = require("../database");

router.get("/", (req, res) => {
  query(`SELECT * FROM products`, (err, data) => {
    if (err) res.status(500).send({ error: err.message });
    res.status(200).send(data);
  });
});

router.patch("/change-ischecked/:id", (req, res) => {
  const product_id = parseInt(req.params.id);
  console.log(req.params);
  query(
    `UPDATE products SET isChecked = 1 WHERE id_product = ${product_id}`,
    (err, data) => {
      if (err) res.status(500).send({ error: err.message });
      // query(
      //   `SELECT * FROM products where id_product = ${product_id}`,
      //   (err, product) => {
      //     if (err) res.status(500).send({ error: err.message });
      //     console.log(product);
      //   }
      // );
      res.status(200).send({ message: "success" });
    }
  );
});

router.get("/:id", (req, res) => {
  const product_id = parseInt(req.params.id);
  query(
    `SELECT * FROM products WHERE id_product = ${product_id}`,
    (err, data) => {
      console.log(err);
      if (err) return res.status(400).send({ error: err.message });
      return res.status(200).send(data[0]);
    }
  );
});
module.exports = router;
