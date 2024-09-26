const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mateus1478",
  database: "nome_do_banco",
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = db;
