class imagemRepository {
  constructor(db) {
    this.db = db;
  }

  static adicionarImagem = (referencia, data_criacao, titulo) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO imagens (referencia, data_criacao, titulo) VALUES (?, ?, ?)",
        [referencia, data_criacao, titulo],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  };

  static getImagemById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM imagens WHERE id = ?", [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  static getAllImagens = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM imagens", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  static atualizarImagem = (id, referencia, data_criacao, titulo) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE imagens SET referencia = ?, data_criacao = ?, titulo = ? WHERE id = ?",
        [referencia, data_criacao, titulo, id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  };

  static deletarImagem = (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM imagens WHERE id = ?", [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

module.exports = imagemRepository;