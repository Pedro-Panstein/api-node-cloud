const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();

function adiconarImagem(titulo, referencia, id_usuario) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tb_awsimagem (titulo, id_usuario) VALUES (?, ?)",
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
};
