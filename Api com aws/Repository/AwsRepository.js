const connectionService = require("../Service/ConnectionService");
const db = connectionService.connect();
const awsModel = require("../Model/AwsModel");
const UsuarioModel = require("../Model/UsuarioModel");

function adiconarImagem(titulo, referencia, id_usuario) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tb_awsimagem (titulo, referencia, id_usuario) VALUES (?, ?, ?)",
      [titulo, referencia, id_usuario],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(
            new AwsModel(result.insertId, titulo, referencia, id_usuario)
          );
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
        resolve(rows.map((row) => AwsModel.fromDatabaseRow(row)));
      }
    });
  });
}

async function getImageByReferencia(referencia) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT i.*, u.* FROM tb_awsimagem i INNER JOIN tb_awsusuarios u ON i.id_usuario = u.id WHERE i.referencia = ?",
      [referencia],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const images = rows.map((row) => {
            const image = AwsModel.fromDatabaseRow(row);
            const user = UsuarioModel.fromDatabaseRow(row);
            return { image, user };
          });
          resolve(images);
        }
      }
    );
  });
}

const AwsModel = require("../Model/AwsModel");

function getAllImages() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tb_awsimagem", (err, result) => {
      if (err) {
        reject(err);
      } else {
        const images = result.map((row) => AwsModel.fromDatabaseRow(row));
        resolve(images);
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
