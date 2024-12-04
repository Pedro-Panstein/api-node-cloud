const imagemRepository = require("../Repository/imagemRepository");

module.exports = (app) => {
  const repository = imagemRepository;

  app.post("/imagem/adicionar", (req, res) =>
    repository
      .adicionarImagem(
        req.body.referencia,
        req.body.data_criacao,
        req.body.titulo
      )
      .then(() => res.status(201).send("Imagem adicionada com sucesso"))
      .catch((err) => res.status(500).send(err.message))
  );

  app.get("/imagem/listar", (req, res) =>
    repository
      .getAllImagens()
      .then((imagens) => res.json(imagens))
      .catch((err) => res.status(500).send(err.message))
  );

  app.put("/imagem/atualizar/:id", (req, res) =>
    repository
      .atualizarImagem(
        req.params.id,
        req.body.referencia,
        req.body.data_criacao,
        req.body.titulo
      )
      .then(() => res.send("Imagem atualizada com sucesso"))
      .catch((err) => res.status(500).send(err.message))
  );

  app.delete("/imagem/deletar/:id", (req, res) =>
    repository
      .deletarImagem(req.params.id)
      .then(() => res.send("Imagem deletada com sucesso"))
      .catch((err) => res.status(500).send(err.message))
  );
};
