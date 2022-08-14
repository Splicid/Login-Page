const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
let sql = "SELECT * FROM user.user"
connection.execute(sql, (err, res) => {
    if(err) throw err;
    console.log(res)
})

  module.exports = connection.promise();