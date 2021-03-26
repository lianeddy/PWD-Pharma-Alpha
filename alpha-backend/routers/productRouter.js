const router = require("express").Router();
const query = require("../database");
const { uploader } = require("../handlers");
const fs = require("fs");

router.get("/", (req, res) => {
  let sql = `SELECT * FROM products `;
  if (req.query.priceMin && req.query.priceMax && req.query.productName) {
    sql += ` WHERE PRICE > ${parseInt(
      req.query.priceMin
    )} AND PRICE < ${parseInt(
      req.query.priceMax
    )} AND LOWER(productName) LIKE ('%${
      req.query.productName
    }%') ORDER BY PRICE ASC`;
  } else if (req.query.priceMin) {
    sql += ` WHERE PRICE > ${req.query.priceMin} ORDER BY PRICE ASC`;
  } else if (req.query.priceMax) {
    sql += ` WHERE PRICE < ${req.query.priceMax} ORDER BY PRICE ASC `;
  } else if (req.query.productName) {
    sql += ` WHERE LOWER(productName) LIKE ('%${req.query.productName}%')`;
  }

  query(sql, (err, data) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.status(200).send(data);
  });
});

// Get per id
router.get("/:id", (req, res) => {
  query(
    `SELECT * FROM products WHERE id_product = ${req.params.id}`,
    (err, data) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      return res.status(200).send(data);
    }
  );
});

// TODO : Insert, Update, Delete
// Just Uploud Email
// 
router.post("/:id", (req, res) => {
  try {
    const path = "/products";
    const upload = uploader(path, "PRD").fields([{ name: "image" }]);
    upload(req, res, (err) => {
      const { image } = req.files;
      const imagePath = image ? `${path}/${image[0].filename}` : null;

      let sql = `update products set imagepath = '${imagePath}' where id_product = ${req.params.id}`;
      query(sql, (err, data) => {
        if (err) {
          fs.unlinkSync(`public${imagePath}`);
          return res.status(500).send(err.message);
        }
        return res
          .status(201)
          .send({ message: "Data Created", status: "Created" });
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});


// ! Insert
router.post("/", (req, res) => {
  try {
    const path = "/products";
    const upload = uploader(path, "PRD").fields([{ name: "image" }]);
    upload(req, res, (err) => {
      const { image } = req.files;
      // const { productName, price, description, stock } = req.body.data;
      // console.log(req.body);

      const { productName, price, description, stock } = JSON.parse(
        req.body.data
      );

      const imagePath = image ? `${path}/${image[0].filename}` : null;

      let sql = `INSERT INTO products (productName, price, description, stock, isAvailable, imagepath) VALUES ('${productName}', ${price}, '${description}', '${stock}', 1, '${imagePath}')`;
      query(sql, (err, data) => {
        if (err) {
          fs.unlinkSync(`public${imagePath}`);
          return res.status(500).send(err.message);
        }
        return res
          .status(201)
          .send({ message: "Data Created", status: "Created" });
      });
    });
  } catch (err) {
    res.status(200).send(err.message);
    // console.log(err);
  }
});

// Edit Gambar baru
router.patch("/:id", (req, res) => {
  query(
    `SELECT * FROM products WHERE id_product = ${req.params.id}`,
    (err, data) => {
      const oldImagePath = data[0].imagepath;
      const idProduct = data[0].id_product;
      try {
        const path = "/products";
        const upload = uploader(path, "PRD").fields([{ name: "image" }]);
        
        upload(req, res, (err) => {
          // console.log(idProduct);
          const { image } = req.files;
          const { productName, price, description, stock } = JSON.parse(
            req.body.data
          );

          const imagePath = image
            ? `${path}/${image[0].filename}`
            : oldImagePath;
          let sql = `UPDATE products SET productName = '${productName}', price = ${price}, description = '${description}', stock = ${stock}, imagepath = ${
            imagePath ? `${imagePath}` : null
          } WHERE id_product = ${idProduct}`;


          db.query(sql, (err) => {
            if (err) {
              fs.unlinkSync(`public${imagePath}`);
              res.status(500).send(err);
            }
            if (image && oldImagePath !== null) {
              fs.unlinkSync(`public${oldImagePath}`);
            }

            return res.status(200).send({
              message: "Data Edited",
              status: "Edited",
            });
          });
        });
      } catch (err) {
        // console.log(err);
        return res.status(500).send(err.message)
      }
    }
  );
});
// router.patch("/:id", (req, res) => {
//   query(`SELECT * FROM products WHERE id_product = ${req.params.id}`, (err, data) => {
//     const oldImagePath = data[0].imagepath;
//     const idProduct = data[0].id_product;
//     // console.log(data);

//     try {
//       const path = "/products";
//       const upload = uploader(path, "PRD").fields([{ name: "image" }]);

//       upload(req, res, (err) => {
//         const { image } = req.files;
//         console.log(req.body);
//         const { productName, price, description, stock } = JSON.parse(req.body.data)
//         // const get = JSON.parse(req.body.data)
//         console.log(req.body.data);
//         // apabila user tidak mengupload foto baru maka sql akan mengupdate menggunakan foto yang lama
//         const imagePath = image ? `${path}/${image[0].filename}` : oldImagePath;
//         // console.log("=========");

//         let sql = `UPDATE products SET productName = '${productName}', price = ${price}, description = '${description}', stock = ${stock}, imagepath = ${
//           imagePath ? `${imagePath}` : null
//         } WHERE id = ${idProduct}`;

//         // let sql = `INSERT INTO products (productName, price, description, stock, isAvailable, imagepath) VALUES ('${productName}', ${price}, '${description}', '${stock}', 1, '${imagePath}')`;

//         // let sql = `UPDATE products set imagepath = '${imagePath}' WHERE id = ${idProduct}`;

//         query(sql, (err) => {
//           if (err) {
//             fs.unlinkSync(`public${imagePath}`);
//             res.status(500).send(err);
//             // console.log("=========");
//           }

//           // Apabila user upload foto baru dan kolom imagepath sudah terisi dengan foto produk
//           if (image && oldImagePath !== null) {
//             fs.unlinkSync(`public${oldImagePath}`);
//           }

//           return res.status(200).send({
//             message: "Data Edited",
//             status: "Edited",
//           });
//         });
//       });
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   });
// });

// Delete
// for restock
router.put("/:id", (req, res) => {
  const sql = `UPDATE products SET isAvailable = 0 WHERE id_product = ${req.params.id}`;
  query(sql, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send({
      status: "Edited",
      message: `Set Unavailable Product ID = ${req.params.id}`,
      purpose: "If the Admin want to restock the product",
    });
  });
});

// Delete product
// in row database & delete imagepath product
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  try {
    const product = await query(
      `SELECT * FROM products WHERE id_product = ${id}`
    );
    const idProduct = product[0].id_product;
    console.log(product);
    const oldImagePath = product[0].imagepath;
    await query(`DELETE FROM products WHERE id_product = ${idProduct}`);
    fs.unlinkSync(`public${oldImagePath}`);
    return res.status(200).send({ message: "Data Deleted", status: "Deleted" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
