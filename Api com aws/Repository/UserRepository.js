const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();
const usuarioModel = require("../Model/UsuarioModel");

function adicionarUsuario(name, email) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tb_awsusuarios (name, email) VALUES (?, ?)",
      [name, email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(new usuarioModel(result.insertId, name, email));
        }
      }
    );
  });
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tb_awsusuarios", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.map((row) => usuarioModel.fromDatabaseRow(row)));
      }
    });
  });
}

module.exports = {
  adicionarUsuario,
  getAllUsers,
};
