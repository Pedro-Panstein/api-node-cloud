const mysql = require("mysql");

function createSchema() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });
  db.query("CREATE DATABASE IF NOT EXISTS db_aws", (err, result) => {
    if (err) {
      console.error("Erro ao criar o banco de dados: " + err);
      return;
    }
    console.log("Database criada com sucesso");
  });
}

function connect() {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_aws",
  });
  db.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao MySQL: " + err);
      return;
    }
    console.log("Conectado ao MySQL com ID " + db.threadId);
  });
  createTable(db);
  return db;
}

function createTable(db) {
  db.query(
    `CREATE TABLE IF NOT EXISTS ${"A DEFINIR"} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))`,
    (err, result) => {
      if (err) {
        console.error("Erro ao criar a tabela: " + err);
        return;
      }
      console.log("Tabela criada com sucesso");
    }
  );
}

module.exports = { connect, createSchema };