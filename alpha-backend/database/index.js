const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "sintha",
  password: "asd123",
  database: "ppa_database",
  port: 3306,
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
