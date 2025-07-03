const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "user_auth",
  multipleStatements: true,
});
module.exports = db.promise();
