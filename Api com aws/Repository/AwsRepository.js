const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();

function adiconarImagem(titulo, referencia, id_usuario) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tb_awsimagem (titulo, referencia, id_usuario) VALUES (?, ?, ?)",
      [titulo, referencia, id_usuario],
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

function getImageById(id) {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tb_awsimagem WHERE id = ?", [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

async function getImageByReferencia(referencia) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM tb_awsimagem WHERE referencia = ?",
      [referencia],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

function getAllImages() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tb_awsimagem", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  adiconarImagem,
  getAllImages,

  getImageById,
  getImageByReferencia,
};
