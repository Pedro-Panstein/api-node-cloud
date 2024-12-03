//este arquivo irá criar a database e a tabela imagens
const mysql = require("mysql");
//abaixo terá uma função que cria uma database

function createSchema() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    //   database: "db_crudimagem",
  });

  db.query("CREATE DATABASE IF NOT EXISTS db_crudimagem", (err, result) => {
    if (err) {
      console.error("Error creating database: " + err.stack);
      return;
    }
    console.log("Database created successfully");
  });

  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_crudimagem",
  });
}

function createTable(db) {
  db.query(
    "CREATE TABLE IF NOT EXISTS imagens (id INT PRIMARY KEY, referencia VARCHAR(255), data_criacao DATE, titulo VARCHAR(255))",
    (err, result) => {
      if (err) {
        console.error("Error creating table: " + err.stack);
        return;
      }
      console.log("Table created successfully");
    }
  );
}

module.exports = { createSchema, createTable };
