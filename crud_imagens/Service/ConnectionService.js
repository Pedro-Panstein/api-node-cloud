const mysql = require("mysql");

function createSchema() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });
  db.query("CREATE DATABASE IF NOT EXISTS db_crudimagem", (err, result) => {
    if (err) {
      console.error("Error creating database: " + err.stack);
      return;
    }
    console.log("Database created successfully");
  });
}

function connect() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_crudimagem",
  });

  db.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao MySQL: " + err.stack);
      return;
    }
    console.log("Conectado ao MySQL com ID " + db.threadId);
  });
  createTable(db);
  return db;
}

function createTable(db) {
  db.query(
    "CREATE TABLE IF NOT EXISTS imagens (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, referencia VARCHAR(255) NOT NULL, data_criacao DATE NOT NULL, titulo VARCHAR(255) NOT NULL)",
    (err, result) => {
      if (err) {
        console.error("Error creating table: " + err.stack);
        return;
      }
      console.log("Table created successfully");
    }
  );
}

module.exports = { connect, createSchema };
