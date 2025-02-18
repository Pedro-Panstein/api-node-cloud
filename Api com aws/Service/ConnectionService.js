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
    `CREATE TABLE IF NOT EXISTS tb_awsimagem (id INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(255), referencia VARCHAR(255), id_usuario INT, FOREIGN KEY (id_usuario) REFERENCES tb_awsusuarios(id))`,
    (err, result) => {
      if (err) {
        console.error("Erro ao criar a tabela: " + err);
        return;
      }
      console.log("Tabela criada imagem com sucesso");
    }
  );

  db.query(
    `CREATE TABLE IF NOT EXISTS tb_awsusuarios (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))`,
    (err, result) => {
      if (err) {
        console.error("Erro ao criar a tabela: " + err);
        return;
      }
      console.log("Tabela criada usuario com sucesso");
    }
  );
}

module.exports = { connect, createSchema };
