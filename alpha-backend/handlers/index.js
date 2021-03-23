const hashPassword = require("./encryptHandler");
const { createJWTToken, checkToken } = require("./jwt");
const { transporter, transportPromise } = require("./nodemailer");

module.exports = {
  hashPassword,
  createJWTToken,
  checkToken,
  transporter,
  transportPromise,
};