const mysql = require("mysql");

class Connection {
  constructor() {
    this.db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "db_crudimagem",
    });

    this.db.connect((err) => {
      if (err) {
        console.error("Erro ao conectar ao MySQL: " + err.stack);
        return;
      }
      console.log("Conectado ao MySQL com ID " + this.db.threadId);
    });
  }

  getConnection() {
    return this.db;
  }
}

module.exports = new Connection().getConnection();
