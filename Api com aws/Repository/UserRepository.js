const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();

function adicionarUsuario(name, email) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tb_awsusuarios (name, email) VALUES (?, ?)",
      [name, email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
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
        resolve(result);
      }
    });
  });
}

module.exports = {
  adicionarUsuario,
  getAllUsers,
};
