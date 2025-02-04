const imagemRepository = require("../Repository/imagemRepository");

const adicionarImagem = async (req, res) => {
  try {
    await imagemRepository.adicionarImagem(
      req.body.referencia,
      req.body.data_criacao,
      req.body.titulo
    );
    res.status(201).send("Imagem adicionada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllImagens = async (req, res) => {
  try {
    const imagens = await imagemRepository.getAllImagens();
    res.json(imagens);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getImageById = async (req, res) => {
  try {
    const imagem = await imagemRepository.getImagemById(req.params.id);
    res.json(imagem);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const atualizarImagem = async (req, res) => {
  try {
    await imagemRepository.atualizarImagem(
      req.params.id,
      req.body.referencia,
      req.body.data_criacao,
      req.body.titulo
    );
    res.send("Imagem atualizada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletarImagem = async (req, res) => {
  try {
    await imagemRepository.deletarImagem(req.params.id);
    res.send("Imagem deletada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  adicionarImagem,
  getAllImagens,
  getImageById,
  atualizarImagem,
  deletarImagem,
};
