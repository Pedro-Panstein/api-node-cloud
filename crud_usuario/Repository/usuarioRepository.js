const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();

function adicionarUsuario(nome, data_criacao) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO db_usuario (nome, data_criacao) VALUES (?, ?)",
      [nome, data_criacao],
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

function getUsuarioById(id) {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM db_usuario WHERE id = ?", [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getAllUsuarios() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM db_usuario", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function atualizarUsuario(id, nome, data_criacao) {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE db_usuario SET nome = ?, data_criacao = ? WHERE id = ?",
      [nome, data_criacao, id],
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

function deletarUsuario(id) {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM db_usuario WHERE id = ?", [id], (err, result) => {
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
  getUsuarioById,
  getAllUsuarios,
  atualizarUsuario,
  deletarUsuario,
};
