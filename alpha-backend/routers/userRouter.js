const router = require("express").Router();
const query = require("../database");
const { userController } = require("../controllers");
// const { verifyToken,  createToken } = require("../helpers/jwtHelper");
const {
  checkToken,
  createJWTToken,
  hashPassword,
  transporter,
  transportPromise,
} = require("../helpers");


//Get ALL 
router.get("/all", (req, res) => {
  let sql = `select * from users`;
  query(sql, (err, data) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.status(200).send(data);
  });
});



// Change Password
router.post("/change-pass", checkToken, (req, res) => {
  const { password } = req.body;
  const userID = req.user.id;

  // console.log(userID);
  const editPassword = `UPDATE users SET password = '${hashPassword(
    password
  )}' WHERE id = ${userID}`;
  // const editPassword = `UPDATE users set password =${password} where id = ${userID}`;
  query(editPassword, (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send("Password has been updated");
  });
});

// router.post('/keepLogin', verifyToken, userController.keepLogin)
// router.post('/login', userController.login)

module.exports = router;
