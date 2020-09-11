const mysql = require("mysql");
const connect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connect.connect((err) => {
  if (err) console.log(err);
  console.log("connect to: ", process.env.DATABASE);
});

module.exports = connect;
