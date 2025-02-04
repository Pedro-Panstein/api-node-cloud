const mysql = require("mysql");

function createSchema() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });
  db.query("CREATE DATABASE IF NOT EXISTS db_usuario", (err, result) => {
    if (err) {
      console.log("Error creating database: " + err.stack);
      return;
    }
    console.log("Database created sucessfully");
  });
}

function connect() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_usuario",
  });

  db.connect((err) => {
    if (err) {
      console.log("Erro ao conectar ao MySQL: " + err.stack);
      return;
    }
    console.log("Conectado ao MySQL com ID " + db.threadId);
  });
  
  createTable(db);
  return db;
}

function createTable(db) {
  db.query(
    "CREATE TABLE IF NOT EXISTS db_usuario (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nome VARCHAR(255) NOT NULL, data_criacao DATE NOT NULL)",
    (err, result) => {
      if (err) {
        console.log("Error creating talbe: " + err.stack);
        return;
      }
      console.log("Table created sucessfully");
    }
  );
}

module.exports = { connect, createSchema };
