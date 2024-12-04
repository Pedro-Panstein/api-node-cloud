class ImagemController {
  constructor(db) {
    this.db = db;
  }

  adicionarImagem(req, res) {
    const { referencia, data_criacao, titulo } = req.body;
    this.db.query(
      "INSERT INTO imagens (referencia, data_criacao, titulo) VALUES (?, ?, ?, ?)",
      [referencia, data_criacao, titulo],
      (err, result) => {
        if (err) {
          console.error("Erro ao executar a query: " + err.stack);
          res.status(400).send("Erro ao criar a imagem");
          return;
        }
        res.status(201).send("Imagem criada com sucesso");
      }
    );
  }

  listarImagens(req, res) {
    this.db.query("SELECT * FROM imagens", (err, results) => {
      if (err) {
        console.error("Erro ao executar a query: " + err.stack);
        res.status(500).send("Erro ao listar as imagens");
        return;
      }
      res.json(results);
    });
  }

  listarImagemPorId(req, res) {
    const id = req.body;
    this.db.query(
      "SELECT * FROM imagens WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.error("Erro ao executar a query: " + err.stack);
          res.status(500).send("Erro ao listar a imagem ");
          return;
        }
        res.json(results);
      }
    );
  }

  atualizarImagem(req, res) {
    const { referencia, data_criacao, titulo } = req.body;
    const userId = parseInt(req.params.id);
    this.db.query(
      "UPDATE imagens SET referencia = ?, data_criacao = ?, titulo = ? WHERE id = ?",
      [referencia, data_criacao, titulo, userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao executar a query: " + err.stack);
          res.status(500).send("Erro ao atualizar a imagem");
          return;
        }
        res.send("Imagem atualizada com sucesso");
      }
    );
  }

  deletarImagem(req, res) {
    const userId = parseInt(req.params.id);
    this.db.query(
      "DELETE FROM imagens WHERE id = ?",
      [userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao executar a query: " + err.stack);
          res.status(400).send("Erro ao deletar a imagem");
          return;
        }
        res.status(201).send("Imagem deletada com sucesso");
      }
    );
  }
}

module.exports = ImagemController;
